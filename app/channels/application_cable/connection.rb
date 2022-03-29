module ApplicationCable
  class Connection < ActionCable::Connection::Base
   identified_by :session_id, :current_user

    def connect
      env["warden"].authenticated?
      self.current_user = env["warden"].user
      self.session_id = request.session.id
      reject_unauthorized_connection unless current_user || session_id
    end
  end
end
