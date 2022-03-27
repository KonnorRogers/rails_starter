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

  option :variant, (proc { |value| FlashComponent.to_variant(value) })
  option :message, proc(&:to_s)

  option :icon, default: proc { |value| (value || ICONS[variant.to_sym]).to_s }
  option :duration, default: proc { "Infinity" }
  option :open, default: proc { true }
  option :closable, default: proc { true }
  option :html_attributes, default: proc { {} }

  def self.to_variant(str)
    str = str.to_s
    case str
    when /alert/i
      str = "warning"
    when /notice/i
      str = "primary"
    when /error/i
      str = "danger"
    end
    str
  end

  def call
    helpers.tag.sl_alert(variant: variant, open: open, closable: closable, duration: duration, "data-turbo-cache": "false", **html_attributes) do
      helpers.tag.sl_icon(slot: "icon", name: icon) + "\n" + @message
    end
  end
end
