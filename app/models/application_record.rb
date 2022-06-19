class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
  self.implicit_order_column = "created_at"

  include Formable

  delegate :render, to: :ApplicationController

  def sgid
    to_sgid(expires_in: nil).to_s
  end
end
