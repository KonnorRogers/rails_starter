module ApplicationHelper
  def sl_tag(name, **options, &block)
    tag.public_send("sl_#{name.to_s.underscore}".to_sym, **options, &block)
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

  def checked_html(bool)
    bool ? "checked" : ""
  end
end
