require_relative "boot"

require "rails"

[
  "active_record/railtie",
  "active_storage/engine",
  "action_controller/railtie",
  "action_view/railtie",
  "action_mailer/railtie",
  "active_job/railtie",
  "action_cable/engine",
  "action_mailbox/engine",
  "action_text/engine",
  "rails/test_unit/railtie",
  # "sprockets/railtie", no.
].each do |railtie|
  require railtie
end

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module RailsStarter
  class Application < Rails::Application
    # Configure the path for configuration classes that should be used before initialization
    # NOTE: path should be relative to the project root (Rails.root)
    # config.anyway_config.autoload_static_config_path = "config/configs"
    #
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")
    config.active_job.queue_adapter = :sidekiq

    # @see https://guides.rubyonrails.org/active_record_multiple_databases.html#migrate-to-the-new-connection-handling
    config.active_record.legacy_connection_handling = false

    config.generators do |g|
      g.orm :active_record, primary_key_type: :uuid
      g.template_engine :erb
      g.test_framework :test_unit
      g.stylesheets false
      g.helpers false
    end
  end
end
