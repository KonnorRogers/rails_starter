module ApplicationHelper
  # Shortcut for model.errors.full_messages_for(:thing).first
  # @param {ActiveModel::Model, ActiveRecord} resource - An ActiveRecord or ActiveModel
  # @param {#to_sym} method - The method to call +#full_messages_for+ on.
  # @return {String, nil} Return the first error on a given Model.
  def error_for(resource, method)
    resource.errors.full_messages_for(method.to_sym).first
  end
end
