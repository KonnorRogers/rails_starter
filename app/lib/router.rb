module Router
  class << self
    include Rails.application.routes.url_helpers
    include Devise::OmniAuth::UrlHelpers

    def default_url_options
      ApplicationMailer.default_url_options || {}
    end

    def asset_url(source, options = {})
      ApplicationController.helpers.asset_url(source, options.merge(default_url_options))
    end
  end
end
