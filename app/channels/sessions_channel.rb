class SessionChannel < ApplicationCable::Channel
  def subscribed
    stream_for session_id
  end
end
