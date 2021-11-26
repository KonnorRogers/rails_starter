class FlashComponent < ApplicationComponent
  # notice, warning, and error can be set by default in redirect_to.
  #  For additional flashes, you must do flash[:type] = "message"
  ICONS = {
    primary: "info-circle",
    success: "check2-circle",
    info: "gear",
    warning: "exclamation-triangle",
    danger: "exclamation-octagon"
  }.freeze

  option :type, proc(&:to_s)
  option :message, proc(&:to_s)

  option :icon, default: proc { |value| (value || ICONS[type.to_sym]).to_s }
  option :duration, default: proc { "Infinity" }
  option :open, default: proc { true }
  option :closable, default: proc { true }

  def call
    helpers.tag.sl_alert(type: type, open: open, closable: closable, duration: duration) do
      helpers.tag.sl_icon(slot: "icon", name: icon) + "\n" + @message
    end
  end
end
