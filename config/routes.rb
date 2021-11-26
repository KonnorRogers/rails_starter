Rails.application.routes.draw do
  root "static#index"

  devise_for :users, controllers: {
    masquerades: "users/masquerades",
    registrations: "users/registrations",
    sessions: "users/sessions"
  }

  devise_scope :user do
    get "/sign_up", to: "users/registrations#new"
    get "/login", to: "users/sessions#new"
  end

  # Internal
  get "/_/design-docs", to: "static#design_docs"
end
