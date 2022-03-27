# This exists to work with Noticed. Generally, we should be using Sidekiq.
class ApplicationJob < ActiveJob::Base
  # Automatically retry jobs that encountered a deadlock
  # retry_on ActiveRecord::Deadlocked

  include CableReady::Broadcaster
  delegate :render, to: :ApplicationController

  # Most jobs are safe to ignore if the underlying records are no longer available
  discard_on ActiveJob::DeserializationError
end
