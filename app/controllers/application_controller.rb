class ApplicationController < ActionController::Base
  include CableReady::Broadcaster
  include Pagy::Backend

  # before_action :authenticate_user!
  # before_action :masquerade_user!, if: :user_signed_in?

  add_flash_types :primary, :success, :info, :warning, :danger, :notice, :alert
end
