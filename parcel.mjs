import {Parcel} from '@parcel/core';
import * as process from "process"
import * as path from "path"
import {fileURLToPath} from 'url';

// Add additional file loaders here.
const publicDir = 'public'
const publicPath = '/build'
const buildDir = `${publicDir}${publicPath}`
const outdir = path.join(process.cwd(), buildDir)
const entrypoints = ['app/frontend/application.js']

/**
 * @type {import('@parcel/core').Parcel}
 */
let bundler = new Parcel({
  entries: entrypoints,
  defaultConfig: '@parcel/config-default',
  mode: 'production',
  targets: {
    modern: {
      engines: {
        browsers: ['last 1 Chrome version'],
      },
      distDir: outdir
    }
  },
  additionalReporters: [
    {
      packageName: '@parcel/reporter-cli',
      resolveFrom: fileURLToPath(import.meta.url)
    }
  ]
});

// if (argv.includes("--watch")) {
//   ;(async function () {
//     let subscription = await bundler.watch((err, event) => {
//       if (err) {
//         // fatal error
//         throw err;
//       }

//       if (event.type === 'buildSuccess') {
//         let bundles = event.bundleGraph.getBundles();
//         console.log(`✨ Built ${bundles.length} bundles in ${event.buildTime}ms!`);
//       } else if (event.type === 'buildFailure') {
//         console.log(event.diagnostics);
//       }
//     });


//     // some time later...
//     await subscription.unsubscribe();
//   })()
// } else {
  ;(async function () {
    try {
      let {bundleGraph, buildTime} = await bundler.run();
      let bundles = bundleGraph.getBundles();
      console.log(`✨ Built ${bundles.length} bundles in ${buildTime}ms!`);
    } catch (err) {
      console.log(err.diagnostics);
    }
  })()
// }
