class Users::RegistrationController < Devise::RegistrationsController
    before_action :configure_permitted_parameters
    respond_to :json
  
    def new
        user = User.new(user_params)
    end
    
    def create
        user = User.create(first_name: params[:first_name], 
                    last_name: params[:last_name],
                    email: params[:email], 
                    addresh: params[:addresh],
                    mobile_number: params[:mobile_number],
                    user_type: params[:user_type],
                    password: params[:password],
                    password_confirmation: params[:password_confirmation])

        if user.save 
            render json: {status: "SUCCESS", message: "Created new user account", data: user }, status: :ok
        else 
            puts user.errors.full_messages
            render json: {status: "ERROR", 
                        message: "Could not create new user account", 
                        data: user.errors}, 
                        status: :unprocessable_entity
        end
    end
       
    private 
       
    def user_params
        params.require(:user).permit(:first_name,:last_name,:addresh,:mobile_number,:user_type, :email, :password, :password_confirmation)
    end

    protected
    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
    end
end