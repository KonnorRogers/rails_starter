class DialogComponent < ApplicationComponent
  param :html_attributes, default: proc { {} }

  renders_one :footer
end
