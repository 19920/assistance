class RequestsController < ApiController
    before_action :require_login,except: [:index,:show]
    def index
      requests = Request.all 
      render json: {requests: requests}
    end
    def create
        request = Request.new request_params
       request.user_id = current_user.id
        if request.save
            json_response " Request Created  successfully", true, {request: request}, :ok
        else
            render json: {
             measage: "request could not be created"
            }
        end
    end
    def show
        if current_user.present? 
            if current_user.id == @request.user_id
                json_response "Show  request", true, {
                    request: @request, 
                    conversation: @request.conversations.includes([:request_owner, :volunteer]).as_json(only: [:id, :request_id], methods: [:request_owner_name, :volunteer_name]),
                    messages: Message.where(request_id: @request.id).reverse_order, }, :ok
            else 
           json_response "Show request ", true, {
            request: @request, 
            conversation: @request.conversations.where(volunteer_id: current_user.id).includes([:request_owner, :volunteer]).as_json(only: [:id, :request_id], methods: [:request_owner_name, :volunteer_name]),
            messages: @request.messages.where(volunteer_id: current_user.id).or(@request.messages.where(request_owner_id: current_user.id)).reverse_order,
        }, :ok

            end
        else
           json_response "Show request", true, {request: @request}, :ok
        end
    end
    def destroy
        if current_user @request.user
            if @request.destroy
                json_response "Deleted request successfully", true, {request: @request}, :ok
            else
                json_response "Deleted requestfailed", false, {}, :unprocessable_entity
            end
        else
            json_response "You dont have permission to delete this request", false, {}, :unauthorized
        end

    end
    
    private
    def request_parsms
        params.require(:request).permit(:title, :description, :address, :latitude, :longitude, :request_type, :status)
    end
end
