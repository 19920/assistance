class ConversationsController < ApiController
    before_action :require_login,except: [:index,:create,:destroy]
    def index
        if current_user.present?
          if params["conversation_id"].present?
            if Conversation.find(params["conversation_id"]).request_owner_id == current_user.id || Conversation.find(params["conversation_id"]).volunteer_id == current_user.id
              answers(params["conversation_id"])
            else
             json_response "You are not allowed to view this conversation", false, {}, :not_found
            end
          end
        else
          json_response "You need to log in to view conversations", false, {}, :unauthenticated
        end
      end
    def show
        volunteer_id = current_user.id
        request_user_id = request.user_id
        if Conversation.between(volunteer_id, @request.id).present?
          conversation = Conversation.between(volunteer_id, @request.id).first
          json_response "Conversation already exist", true, {
            request: Request.find(conversation.id),
            conversation: Conversation.where(id: conversation.id).includes([:request_owner, :volunteer]).as_json(only: [:id, :request_id], methods: [:request_owner_name, :volunteer_name]),
            messages: Message.where(conversation_id: conversation.id),
            }, :ok
        else
          json_response "Error finding conversation", false, {}, :not_found
        end
      end
      def create
        volunteer_id = current_user.id
        if Conversation.between(volunteer_id, @request.id).present?
          conversation = Conversation.between(volunteer_id, @request.id).first
          json_response "Conversation already exist", true, {
            request: Request.find(conversation.id),
            conversation: Conversation.where(id: conversation.id).includes([:request_owner, :volunteer]).as_json(only: [:id, :request_id], methods: [:request_owner_name, :volunteer_name]),
            messages: Message.where(conversation_id: conversation.id),
            }, :ok
        elsif @request.user_id == volunteer_id
          json_response "You can't volunteer on your own request", false, {}, :unprocessable_entity
        elsif @request.answers_counter > 4 || @request.status>0
          json_response "This Request has too many volunteers already", true, {}, :gone
        else
          conversation = Conversation.new(chat_params)
          conversation.volunteer_id = volunteer_id
          conversation.request_owner_id = @request.user_id
          if conversation.save
            @request.increment!(:answers_counter)
          json_response "You can now contact the request owner", true, {
            request: @request,
            conversation: Conversation.where(id: conversation.id).includes([:request_owner, :volunteer]).as_json(only: [:id, :request_id], methods: [:request_owner_name, :volunteer_name]),
            messages: [],
            }, :ok
          else
            json_response "Error finding ", false, {}, :unprocessable_entity
          end
        end
      end
      def destroy
        if current_user.present?
          if params["conversation_id"].present?
              task = Request.find(params['conversation_id'])
            if request.conversations.where(request_owner_id: current_user.id)or(request.conversations.where(volunteer_id: current_user.id))
              request.update_attributes(status: current_user.id)
              json_response "request  done", true, {request: request}, :ok
            else
             json_response "You are not allowed to change this request", false, {}, :unauthorized
            end
          end
        else
          json_response "You need to log in to change this request", false, {}, :unauthenticated
        end
      end
      private
  def chat_params
      params.require(:conversation).permit :request_id
  end

  def answers(id)
    json_response "all messages", true, { messages: Message.where(conversation_id: id)}, :ok
  end
end

end
