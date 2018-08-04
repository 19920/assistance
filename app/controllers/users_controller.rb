class UsersController < ApiController
    before_action :require_login,except:[:create]
    def index
        if params[:search].present?
            @users = User.near(params[:search], 50, :order => :distance)
          else
            @users =User.all
            render json: @users
        end
    end
    def create
        user = User.create!(user_params)
        render json: {token: user.auth_token}
    end
    def profile
        user= User.find_by_uth_token!(request.headers[:token])
        user_requests = Requests.where(user_id: user.id)
        render json: {user:{email: user.email,firstname: user.first_name,lastname:user.last_name, latitude:user.latitude,longitude:user.longitude},requests: user_requests}
    end
    private
    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :password, :latitude, :longitude)
    end
end
