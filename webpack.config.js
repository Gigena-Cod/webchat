const HtmlWebpackPlugin = require("html-webpack-plugin");

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
 

const path = require("path");

const ruleForTypeScript = {
  test: /\.(ts|tsx)$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
  },
};

const rules = [ruleForTypeScript];

module.exports = (env, argv) => {
  const { mode } = argv;
  const isProduction = mode === "production";

  const outputFilename = isProduction ? '[name].[contenthash].js' : "main.js";

  const outputPath = isProduction
    ? path.resolve(__dirname, "dist/production")
    : path.resolve(__dirname, "dist/staging");

  return {
    entry: "./src/infrastructure/index.tsx",
    output: {
      path: outputPath,
      filename: outputFilename,
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    module: {
      rules,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/infrastructure/index.html",
        hash: true, // Agrega el hash en el nombre del archivo HTML
      }),
      new CleanWebpackPlugin(), 
    ],
    devServer: {
      port: 3000,
      open: true,
      hot: true,
      compress: true,
    },
    devtool: 'source-map',
  };
};
