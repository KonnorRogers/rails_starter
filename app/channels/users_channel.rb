class UsersChannel < ApplicationCable::Channel
  def subscribed
    if current_user
      stream_for(current_user)
    else
      transmit false
      reject
    end
  end
end
