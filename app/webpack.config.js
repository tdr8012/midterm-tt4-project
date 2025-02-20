const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: {
    global: path.resolve(__dirname, "global.js"),
    index: path.resolve(__dirname, "index.js"),
    listProducts: path.resolve(__dirname, "list-products.js"), 
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    assetModuleFilename: "assets/images/[hash][ext][query]",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                quietDeps: true,
                includePaths: [path.resolve(__dirname, "node_modules")],
              },
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(png|jpg|gif|webp)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][hash][ext][query]",
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][hash][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
      chunks: ["global", "index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./list-products.html", 
      chunks: ["listProducts", "global"],
      filename: "list-products.html",
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 9000,
    open: true,
    hot: true,
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "assets"),
    },
    extensions: [".js", ".scss"],
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
};
