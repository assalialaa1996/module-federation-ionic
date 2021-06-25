const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.base.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "business",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      
        // For remotes (please adjust)
         name: "business",
         filename: "businessremoteEntry.js",
         exposes: {
             './home-module': './apps/business/src/app/home/home.module.ts',
         },        
        
        // For hosts (please adjust)
        // remotes: {
        //     "myApp": "myApp@http://localhost:4200/remoteEntry.js",
        //     "personel": "personel@http://localhost:5001/remoteEntry.js",
        //     "shell": "shell@http://localhost:5000/remoteEntry.js",

        // },

        shared: {
          "@angular/core": { singleton: true, strictVersion: true }, 
          "@angular/common": { singleton: true, strictVersion: true }, 
          "@angular/common/http": { singleton: true, strictVersion: true }, 
          "@angular/router": { singleton: true, strictVersion: true },
          "@ionic-native/core": { singleton: true, strictVersion: true },
          "@ionic/angular": { singleton: true, strictVersion: true },

          ...sharedMappings.getDescriptors()
        }
        
    }),
    sharedMappings.getPlugin()
  ],
};
