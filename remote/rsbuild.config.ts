import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

import pkg from "./package.json" with { type: "json" }

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "remote",
      filename: "remote.container.js.bundle",
      exposes: {
        "./Counter": "./src/components/Counter",
      },
      shared: Object.fromEntries(
        Object.entries(pkg.dependencies)
          .map(([dep, { version }]) => (
            [dep, { singleton: true, eager: true, requiredVersion: version }]
          ))
      )
    })
  ],
});
