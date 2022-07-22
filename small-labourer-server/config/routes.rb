Rails.application.routes.draw do

  post '/users/sign_in', to: 'users/sessions#create'
  delete '/users/sign_out', to: 'users/sessions#destroy'
  devise_for :users,expect: [:update ,:new], controllers: { registrations: 'users/registration' }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
