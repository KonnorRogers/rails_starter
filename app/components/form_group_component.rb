class FormGroupComponent < ApplicationComponent
  param :attrs, optional: true do
    option :error, default: proc { nil }
    option :class, default: proc { "" }, reader: false
  end

  def call
    return helpers.tag.kpc_form_group { content } if attrs.nil?

    hash = attrs.to_h
    hash["class"] = hash["class"] + " form-group-error" if attrs.error.present?
    hash["data-controller"] = hash["data-controller"].to_s + " form-group"

    helpers.tag.kpc_form_group(**hash) do
      content
    end
  end
end
