Rails.application.routes.draw do
  root to: 'welcome#landing'

  resources :cuisine, only: :index

  resources :list, only: [:index, :show]

  resources :neighborhood, only: :index

  resources :restaurant, only: :show
end
