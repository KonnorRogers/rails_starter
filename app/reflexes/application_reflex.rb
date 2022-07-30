# frozen_string_literal: true

class ApplicationReflex # < StimulusReflex::Reflex
  before_action -> { I18n.backend.reload! } if Rails.env.development?

  delegate :current_user, to: :connection
  delegate :session_id, to: :connection

  # https://docs.stimulusreflex.com/rtfm/patterns#internationalization
  def with_locale(locale, &block)
    I18n.with_locale(locale || session[:locale]) { block&.call if block }
  end


end
