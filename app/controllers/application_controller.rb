class ApplicationController < ActionController::Base
  before_action :authenticate_user!

  add_flash_types :primary, :success, :info, :warning, :danger
end
