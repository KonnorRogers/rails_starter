# frozen_string_literal: true

require "test_helper"

require "capybara"
require "capybara/cuprite"
require "evil_systems"

EvilSystems.initial_setup(driver_options: {process_timeout: 20})

class ApplicationSystemTestCase < ActionDispatch::SystemTestCase
  driven_by :evil_cuprite, using: :chrome, screen_size: [1400, 1400]

  LINK_TAG = "kpc-link"

  include EvilSystems::Helpers
  include ActionView::Helpers::TranslationHelper
  include Devise::Test::IntegrationHelpers
  include Warden::Test::Helpers

  def current_user_id
    all("meta[name='current_user']", visible: false).last[:content]
  end

  def find_by_attr(attr, attr_value, matcher: "=", **options)
    find("[#{attr}#{matcher}'#{attr_value}']", **options)
  end

  parallelize_setup do |i|
    ActiveStorage::Blob.service.root = "#{ActiveStorage::Blob.service.root}-#{i}"
  end

  def after_teardown
    super
    FileUtils.rm_rf(ActiveStorage::Blob.service.root)
  end
end
