require 'sidekiq/web'

Rails.application.routes.draw do
  root "static#index"

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

  # Internal
  get "/_/design-docs", to: "static#design_docs"
end
