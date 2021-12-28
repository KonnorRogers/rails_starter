class ApplicationController < ActionController::Base
  include CableReady::Broadcaster

  before_action :authenticate_user!

  add_flash_types :primary, :success, :info, :warning, :danger, :notice, :alert
end
