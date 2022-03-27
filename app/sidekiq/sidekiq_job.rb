# This exists to prevent a collision with ApplicationJob.
class SidekiqJob
  include Sidekiq::Job

  include CableReady::Broadcaster
  delegate :render, to: :ApplicationController

  def perform(*args)
    # Do something
  end
end
