module FormHelper
  ## Helpers for using non-standard form elements.

  # Generates a form id for a given Object + method
  # @param {Object} resource - An instance of an ActiveRecord or ActiveModel usually.
  # @param {Symbol} symbol - The attribute to call.
  # @return {String}
  # @example
  #   <% user = User.new %>
  #   <%= form_with model: user do %>
  #     <input id="<%= form_id(user, :first_name)" %>" name="user[first_name]" />
  #   <% end %>
  def form_id(resource, symbol)
    "#{resource.class.name.underscore}_#{symbol}"
  end

  # Generates a form name for a given Object + method
  # @param {Object} resource - An instance of an ActiveRecord or ActiveModel usually.
  # @param {Symbol} symbol - The attribute to call.
  # @return {String}
  # @example
  #   <% user = User.new %>
  #   <%= form_with model: user do %>
  #     <input id="user_first_name" name="<%= form_name(user, :first_name) %>" />
  #   <% end %>
  def form_name(resource, symbol)
    "#{resource.class.name.underscore}[#{symbol}]"
  end

  # Generates a form name for a given Object + method
  # @param {Object} resource - An instance of an ActiveRecord or ActiveModel usually.
  # @param {Symbol} symbol - The attribute to call.
  # @return {String}
  # @example
  #   <% user = User.new %>
  #   <%= form_with model: user do %>
  #     <input id="user_first_name" name="user[first_name]" value="<%= form_value(user, :first_name) %>" />
  #   <% end %>
  def form_value(resource, symbol)
    resource.public_send(symbol.to_sym)
  end


  # Generates an i18n value from the given model.
  # @param {Object} resource - An instance of an ActiveRecord or ActiveModel usually.
  # @param {Symbol} symbol - The attribute to call.
  # @return {String}
  # @example
  #   <% user = User.new %>
  #   <%= form_with model: user do %>
  #     <label for="user_first_name"><%= form_label(user, :first_name) %></label>
  #     <input id="user_first_name" name="user[first_name]" value="<%= form_value(user, :first_name) %>" />
  #   <% end %>
  def form_label(resource, symbol)
    resource.class.human_attribute_name(symbol)
  end

  # The string version of id, name, and value of an Object.
  # @param {Object} resource - An instance of an ActiveRecord or ActiveModel usually.
  # @param {Symbol} symbol - The attribute to call.
  # @return {String}
  # @example
  #   <sl-input <%= form_fields_string(resource, :column) %>></sl-input>
  def form_fields_string(resource, symbol)
    form_fields(resource, symbol).map { |key, value| "#{key}='#{value}'" }.join(" ")
  end

  # The Hash version of id, name, and value of an Object.
  # @param {Object} resource - An instance of an ActiveRecord or ActiveModel usually.
  # @param {Symbol} symbol - The attribute to call.
  # @return {Hash{Symbol => String}}
  # @example
  #   <%= sl_tag "input", **form_fields(resource, :column) %>
  def form_fields(resource, symbol)
    {
      id: form_id(resource, symbol),
      name: form_name(resource, symbol),
      value: form_value(resource, symbol),
      label: form_label(resource, symbol),
      error: error_for(resource, symbol),
    }
  end

  # A way to render checkbox attributes based on the boolean.
  # @return {"checked", ""}
  def checked_html(bool)
    bool ? "checked" : ""
  end
end
