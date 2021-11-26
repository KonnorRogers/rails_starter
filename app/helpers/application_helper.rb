module ApplicationHelper
  # https://github.com/rails/rails/pull/42964
  def sl_form_with(model: nil, scope: nil, url: nil, format: nil, **options, &block)
    options ||= {}
    options[:html] ||= {}
    options[:html][:wrapper_tag] ||= "sl-form"
    options[:builder] ||= ShoelaceFormBuilder
    form_with(model: model, scope: scope, url: url, format: format, **options, &block)
  end

  # Internal methods for form_with
  def form_tag_html(html_options)
    wrapper_tag = html_options.delete("wrapper_tag") || "form"
    extra_tags = extra_tags_for_form(html_options)
    tag(wrapper_tag, html_options, true) + extra_tags
  end

  def form_tag_with_body(html_options, content)
    wrapper_tag = html_options["wrapper_tag"] || "form"
    output = form_tag_html(html_options)
    output << content
    output.safe_concat("</#{wrapper_tag}>")
  end
end
