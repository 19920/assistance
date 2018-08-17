class RequestsController < ApiController
    before_action :require_login,except: [:index,:show]
    def index
      requests = Request.all
      render json: {requests: requests}
    end
    def create
        request = Request.new(request_params)
        request.user = current_user
        if request.save
           render json:{
               message: "ok",
               request: request,
        }else

         render json: {message: "could  not be created"}
        end
    end
    def show
    
      request = Request.find(params[:id])
      render json: {request:request}

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
    def request_params
        params.require(:request).permit(:title, :description, :address, :request_type)
    end
end
