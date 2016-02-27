Rails.application.routes.draw do
  root to: 'welcome#landing'

  resources :cuisine, only: [:index, :show]

  resources :list, only: [:index, :show]

  resources :neighborhood, only: [:index, :show]

  resources :restaurant, only: :show
end
