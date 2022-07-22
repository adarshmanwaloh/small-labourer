class ApplicationController < ActionController::API
    acts_as_token_authentication_handler_for User, except: [:create] 
    before_action :configure_permitted_parameters, if: :devise_controller?
    protected

    # def authenticate_user!
    #   if current_user.authentication_token
    #     super
    #   else 
    #     render json: { error: true, message: 'User not found !'}, 
    #     status: 401 
    #   end 
    # end 

     def configure_permitted_parameters
          devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:first_name,:last_name,:user_type,:addresh,:mobile_number, :email, :password)}
          devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:first_name,:last_name,:user_type,:addresh,:mobile_number, :email, :password)}
     end

end