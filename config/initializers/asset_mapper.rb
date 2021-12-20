AssetMapper.configure do |config|
  config.manifest_files = %w[public/build/manifest.json]
  config.cache_manifest = !(Rails.env.development? || Rails.env.testing?)
end
