class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception,prepend: true

    before_action :configure_permitted_parameters, if: :devise_controller?
    skip_before_action :verify_authenticity_token

    protected

         def configure_permitted_parameters
              devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:first_name,:last_name,:user_type,:addresh,:mobile_number, :email, :password)}
              devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:first_name,:last_name,:user_type,:addresh,:mobile_number, :email, :password)}
         end

end