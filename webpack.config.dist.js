var path = require("path");
var webpack = require("webpack");
var UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
var env = process.env.NODE_ENV;
console.log(env);
module.exports = {
  entry: "./lib/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: env === "production" ? "vue-tables-3.min.js" : "vue-tables.js",
    libraryTarget: "var",
    library: "VueTables"
  },
  externals: {
    vue: "Vue"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  }
};

if (env === "production") {
  module.exports.optimization = {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: false,
        uglifyOptions: {
          compress: {
            warnings: false
          },
          output: {
            comments: false
          }
        }
      })
    ]
  };
  module.exports.plugins = (module.exports.plugins || []).concat([
    //  new webpack.IgnorePlugin(/^vue$/),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]);
}
