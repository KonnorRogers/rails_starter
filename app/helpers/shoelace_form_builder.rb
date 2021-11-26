# https://github.com/rails/rails/tree/main/actionview/lib/action_view/helpers/tags
class ShoelaceFormBuilder < ActionView::Helpers::FormBuilder
  def email_field(method, options = {})
    options.tap do |opts|
      fetch_and_set(opts, :id, "#{@object_name}_#{method}")
      fetch_and_set(opts, :label, method.to_s.titleize)
      fetch_and_set(opts, :type, "email")
      fetch_and_set(opts, :name, "#{@object_name}[#{method}]")
    end

    @template.content_tag :"sl-input", options[:value], options
  end

  # options[:"toggle-password"]
  def password_field(method, options = {})
    options.tap do |opts|
      fetch_and_set(opts, :id, "#{@object_name}_#{method}")
      fetch_and_set(opts, :label, method.to_s.titleize)
      fetch_and_set(opts, :type, "password")
      fetch_and_set(opts, :name, "#{@object_name}[#{method}]")
      fetch_and_set(opts, :"toggle-password", true)
    end

    @template.content_tag :"sl-input", options[:value], options
  end

  def submit(value, options = {})
    options.tap do |opts|
      fetch_and_set(opts, :submit, true)
      fetch_and_set(opts, :value, value)
      fetch_and_set(opts, :name, "commit")
      fetch_and_set(opts, "data-disable", "true")
    end

    @template.content_tag :"sl-button", options[:value], options
  end

  private

  def fetch_and_set(hash, key, default_value)
    hash[key.to_sym] = hash.fetch(key, default_value)
  end
end
