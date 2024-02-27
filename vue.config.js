const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
  configureWebpack: {
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            keep_fnames: true,
            ecma: 2015,
            compress: {
              comparisons: true,
              drop_console: true,
              dead_code: true,
              evaluate: true,
            },
            hoist_props: true,
          },
        }),
      ],
    },
  },
};