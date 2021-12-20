const esbuild = require('esbuild')
const rails = require('esbuild-rails')
const fs = require('fs')
const path = require('path')

// Add additional file loaders here.
const fileLoaderExtensions = ['.png', '.svg', '.jpg', '.jpeg', '.webp', '.woff']
const fileLoaders = {}
fileLoaderExtensions.forEach((ext) => fileLoaders[ext] = 'file')

const publicDir = 'public'
const publicPath = '/build'
const buildDir = `${publicDir}${publicPath}`
const outdir = path.join(process.cwd(), buildDir)
const mappings = {}

;(async () => {
  const result = await esbuild.build({
    entryPoints: ['app/frontend/application.js'],
    entryNames: '[dir]/[name]-[hash]',
    assetNames: '[dir]/[name]-[hash]',
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
    publicPath,
    plugins: [rails()]
  })

  for (const outputFile in result.metafile.outputs) {
    let inputFile = outputFile.replace(/-[A-Z0-9]{8}/, '')
    inputFile = inputFile.replace(`${buildDir}/`, '')
    const outputFileWithoutPublicDir = outputFile.replace(publicDir, '')
    console.log({ inputFile, outputFile: outputFileWithoutPublicDir })
    addMapping(inputFile, outputFileWithoutPublicDir)
  }

  fs.writeFileSync(`${outdir}/manifest.json`, JSON.stringify(mappings, null, 2))
  fs.writeFileSync(`${outdir}/meta.json`, JSON.stringify(result.metafile))
})()

function addMapping (input, output) {
  if (mappings[input] != null) {
    throw new Error(`There is a conflicting manifest key for '"${input}"'.`)
  }

  mappings[input] = output
}
