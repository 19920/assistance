class MessagesController < ApiController
    before_action :require_login,except: [:index,:create,:destroy]
    def index
        if current_user.present?
           json_response "Your messages", true, {messages: Message.where(request_owner_id: current_user.id).or(Message.where(volunteer_id: current_user.id)).all}, :ok
        else
           json_response "You must to login ", false, {}, :not_found
            end
     end

    def create
    puts params
    user_id = current_user.id
    chat_id = params[:conversation_id]

    if Conversation.find( chat_id).present?
        chat = Conversation.find(chat_id)
        if  chat.volunteer_id == user_id || chat.request_owner_id == user_id
            message = Message.new
            message.body = message_params["body"]
            message.conversation_id = chat_id
            message.request_owner_id = chat.request_owner_id
            message.request_id = chat.request_id
            message.volunteer_id = chat.volunteer_id
            if chat.request_owner_id == user_id
              message.owner = true
            end
            puts message.to_json
            if message.save
              json_response "message created", true, {message: message  }, :ok
            else
                json_response "message could not be created", false, {}, :unprocessable_entity
            end
        else
            json_response "You're not allowed to reply to this conversation", false, {}, :forbidden
        end
    else
        json_response "messages not found", false, {}, :not_found
    end
    end
end
