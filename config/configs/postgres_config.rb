# frozen_string_literal: true

class PostgresConfig < ApplicationConfig
  attr_config :user, :port, :host, :password
  required :user, :port, :host, :password unless Rails.env.production?
end
