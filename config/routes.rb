Rails.application.routes.draw do
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post "/login" => "sessions#create"
  delete "/logout" => "sessions#destroy"
  get "/profile" => "users#profile"
  post '/conversations/:conversation_id', to: 'messages#create'
  get '/messages/', to: 'messages#index'
  get '/conversations/:conversation_id', to: 'conversations#index'
  delete '/conversations/:conversation_id', to: 'conversations#destroy'
  resources :users
  resources :requests
  resources :conversations, only: [:index, :show, :create, :destroy]
end
