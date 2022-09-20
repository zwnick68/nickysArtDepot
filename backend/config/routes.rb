Rails.application.routes.draw do
  resources :media
  resources :movements
  resources :artists
  resources :pieces
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
