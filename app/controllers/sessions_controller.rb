class SessionsController < ApiController
    skip_before_action :require_login,only: [:create], raise: false
   def create
    if user = User.validate_login(params[:email], params[:password])
        allow_token_to_be_used_once_for(user)
        send_token_for_valid_ligin_of(user)
    else
        render_unauthorized("error occured in your login")
    end
   end
   def destroy
    logout
    head :ok
   end
   private
   def allow_token_to_be_used_once_for(user)
    user.regenerate_auth_token
   end
   def send_token_for_valid_ligin_of(user)
    render json: {token: user.auth_token}
   end
   def logout
    current_user.invalidate_token

   end
end
