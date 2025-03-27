import { defineConfig } from '@rsbuild/core';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

import pkg from "./package.json" with { type: "json" }

export default defineConfig({
  plugins: [
    // NOT WORKING PROPERLY YET
    pluginModuleFederation({
      name: "store",
      filename: "store.container.js.bundle",
      exposes: {
        "./": "./src/index",
      },
      shared: Object.fromEntries(
        Object.entries(pkg.dependencies)
          .map(([dep, { version }]) => (
            [dep, { singleton: true, eager: true, requiredVersion: version }]
          ))
      )
    })
  ]
});
