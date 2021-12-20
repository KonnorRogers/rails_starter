# Be sure to restart your server when you modify this file.

# Define an application-wide content security policy
# For further information see the following documentation
# https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy

# Rails.application.config.content_security_policy do |policy|
#   # policy.default_src :self, :https
#   # policy.font_src    :self, :https, :data
#   # policy.img_src     :self, :https, :data
#   # policy.object_src  :none
#   # policy.script_src  :self, :https, :http
#   # policy.style_src   :self, :https
#   # policy.connect_src :self, :https

#   if Rails.env.development? || Rails.env.test?
#     srcs = [
#       "http://#{ ViteRuby.config.host_with_port }",
#       "ws://#{ ViteRuby.config.host_with_port }",
#     ]
#     # Allow @vite/client to hot reload changes in development
#     policy.script_src :unsafe_eval, *srcs

#     # Allow @vite/client to hot reload changes in development
#     policy.connect_src *srcs
#   end

# If you are using UJS then enable automatic nonce generation
# Rails.application.config.content_security_policy_nonce_generator = -> request { SecureRandom.base64(16) }

# Set the nonce only to specific directives
# Rails.application.config.content_security_policy_nonce_directives = %w(script-src)

# Report CSP violations to a specified URI
# For further information see the following documentation:
# https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only
# Rails.application.config.content_security_policy_report_only = true
Rails.application.config.content_security_policy do |policy|
  policy.default_src :self, :https
  policy.font_src :self, :https, :data
  policy.img_src :self, :https, :data
  policy.object_src :none
  policy.script_src :self, :https
  policy.style_src :self, :https, :unsafe_inline
  policy.connect_src :self, :https, :data

  if Rails.env.development? || Rails.env.test?
    # Allow @vite/client to hot reload changes in development
    policy.script_src :unsafe_eval, "http://#{ ViteRuby.config.host_with_port }", *policy.script_src

    # Allow @vite/client to hot reload changes in development
    policy.connect_src "ws://#{ ViteRuby.config.host_with_port }", *policy.connect_src
  end
# policy.report_uri "/csp-violation-report-endpoint"
end
