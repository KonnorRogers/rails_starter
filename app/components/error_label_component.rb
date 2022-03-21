class ErrorLabelComponent < ApplicationComponent
  option :error, proc(&:to_s)
  option :slot, optional: true
  option :variant, proc(&:to_sym), default: proc { :danger }

  def small_tag_params
    hash = {style: "display: flex; align-items: center;"}
    hash[:slot] = slot if slot.present?
    hash
  end

  def call
    helpers.tag.div(**small_tag_params) do
      helpers.sl_tag("icon", name: FlashComponent::ICONS[variant]) +
      helpers.tag.p(style: "padding: 0.15em; margin-left: 0.2em; margin-top: 0.1em;") do
        error
      end
    end
  end

  def render?
    error.present?
  end
end
