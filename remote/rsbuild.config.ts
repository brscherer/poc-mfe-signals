import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';


export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "remote_app",
      exposes: {
        "./Counter": "./src/components/Counter",
      },
      // shared: ["react", "react-dom"],
    })
  ],
});
