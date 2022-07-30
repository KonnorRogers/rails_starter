require 'sidekiq/web'

Rails.application.routes.draw do
  root "home#index"
  resources :home, only: %i[index]

  devise_for :users, controllers: {
    masquerades: "users/masquerades",
    registrations: "users/registrations",
    passwords: "users/passwords",
    confirmations: "users/confirmations",
    sessions: "users/sessions"
  }

  devise_scope :user do
    get "/signup", to: "users/registrations#new"
    get "/login", to: "users/sessions#new"
    delete "/logout", to: "users/sessions#destroy"
  end

  authenticate :user, ->(user) { user.admin? } do
    mount Sidekiq::Web => '/sidekiq'
  end

  resources :organizations

  # Internal
  if Rails.env.development?
    resources :internal_docs, only: %i[index]

    namespace :internal_docs do
      resources :designs, only: %i[index]
    end
  end
end
