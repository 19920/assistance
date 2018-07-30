class RequestsController < ApiController
    before_action :require_login,except: [:index,:show]
    def index
        @requests = Request.all 
        render json: @requests
    end
    def show
        @request = Request.find(params[:id])
        render json: @request
    end
    def create
        request = Request.new(request_params)
        request.user = current_user
        if request.save
            render json:{
                message: 'request successful created',
                request: request
            }
        else
            render json: {
             measage: "request could not be created"
            }
        end
        
    end
    private
    def request_parsms
        params.require(:request).permit(:title, :description, :address, :latitude, :longitude, :request_type, :status)
    end
end
