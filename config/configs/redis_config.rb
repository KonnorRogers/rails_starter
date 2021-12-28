# frozen_string_literal: true

class RedisConfig < ApplicationConfig
  attr_config :url, :timeout

  required :url
end
