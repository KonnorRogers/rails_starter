# frozen_string_literal: true

class ApplicationReflex < StimulusReflex::Reflex
  before_action -> { I18n.backend.reload! } if Rails.env.development?

  identified_by :current_user
  identified_by :session_id

  # https://docs.stimulusreflex.com/rtfm/patterns#internationalization
  def with_locale(locale, &block)
    I18n.with_locale(locale || session[:locale]) { block&.call if block }
  end

  def connect
    self.current_user = env["warden"].user
    self.session_id = request.session.id
    reject_unauthorized_connection unless current_user || session_id
  end
end
