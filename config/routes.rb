Rails.application.routes.draw do
  root to: 'welcome#landing'

  resources :cuisine, only: :show

  resources :list, only: :show

  resources :neighborhood, only: :show

  resources :restaurant, only: :show

  namespace :api do
    resources :cuisine, only: :index

    resources :list, only: :index

    resources :neighborhood, only: :index

    get '/restaurant/:id/instagram/(:max_id)', to: 'restaurant#instagram'

    get '/restaurant/:id/yelp/', to: 'restaurant#yelp'
  end
end
