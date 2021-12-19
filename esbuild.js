const esbuild = require('esbuild')
const rails = require('esbuild-rails')
const manifestPlugin = require('esbuild-plugin-manifest')
const fs = require('fs')
const path = require('path')

// Add additional file loaders here.
const fileLoaderExtensions = [".png", ".svg", ".jpg", ".jpeg", ".webp", ".woff"];
const fileLoaders = {};
fileLoaderExtensions.forEach((ext) => fileLoaders[ext] = "file");

(async () => {
  const outdir = path.join(process.cwd(), 'public/build')
  const result = await esbuild.build({
    entryPoints: ['app/frontend/application.js'],
    assetNames: 'assets/[dir]/[name]-[hash]',
    chunkNames: 'chunks/[name]-[hash]',
    metafile: true,
    bundle: true,
    splitting: true,
    minify: true,
    treeShaking: true,
    minifyIdentifiers: true,
    loader: {
      ...fileLoaders
    },
    color: true,
    format: 'esm',
    target: 'ES2017',
    minifySyntax: true,
    outdir,
    watch: process.argv.includes('--watch'),

    // This is used for sourcemap base urls.
    // https://esbuild.github.io/api/#source-root
    // sourceRoot: "/",

    // Used in conjunction with the file loader. This will prepend to all file routes.
    // https://esbuild.github.io/api/#public-path
    publicPath: "/build",
    plugins: [rails(), manifestPlugin()]
  })

  // console.log(result.metafile.outputs)
  for (const k in result.metafile.outputs) {
    // const value = result.metafile.outputs[k]
    console.log(k)
  }

  fs.writeFileSync(`${outdir}/meta.json`, JSON.stringify(result.metafile))
})()
