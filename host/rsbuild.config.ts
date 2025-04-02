import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

import pkg from './package.json' with { type: 'json' };

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'host',
      filename: 'host.container.js.bundle',
      remotes: {
        Counter: 'remote@http://localhost:3002/remote.container.js.bundle',
      },
      exposes: {
        "./Store": './src/store/global.ts',
      },
      shared: {
        ...Object.fromEntries(
          Object.entries(pkg.dependencies).map(([dep, { version }]) => [
            dep,
            { singleton: true, eager: true, requiredVersion: version },
          ]),
        ),
      },
    }),
  ],
});
