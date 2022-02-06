module ApplicationHelper
  def sl_tag(name, **options, &block)
    tag.public_send("sl_#{name.to_s.underscore}".to_sym, **options, &block)
  end

  def sl_submit(**options, &block)
    options[:name] = options.fetch(:name, "commit")
    sl_tag("button", type: "submit", **options, &block)
  end

  def sl_email(**options, &block)
    options[:autofocus] = options.fetch(:autofocus, true)
    options[:autocomplete] = options.fetch(:autocomplete, "email")
    sl_tag("input", type: "email", **options, &block)
  end

  def sl_password(**options, &block)
    sl_tag("input", type: "password", **options, &block)
  end

  def fetch_and_set(hash, key, default_value)
    hash[key.to_sym] = hash.fetch(key, default_value)
  end

  ## Helpers for using non-standard form elements.
  def form_id(resource, symbol)
    "#{resource.class.name.underscore}_#{symbol}"
  end

  def form_name(resource, symbol)
    "#{resource.class.name.underscore}[#{symbol}]"
  end

  def form_value(resource, symbol)
    resource.public_send(symbol.to_sym)
  end

  # @example
  #   <sl-input <%= form_fields_string(resource, :column) %>></sl-input>
  def form_fields_string(resource, symbol)
    form_fields(resource, symbol).map { |key, value| "#{key}='#{value}'" }.join(" ")
  end

  # @example
  #   <%= sl_tag "input", **form_fields(resource, :column) %>
  def form_fields(resource, symbol)
    {id: form_id(resource, symbol), name: form_name(resource, symbol), value: form_value(resource, symbol)}
  end

  def checked_html(bool)
    bool ? "checked" : ""
  end
end
