import path from "path";
import webpack from "webpack";

const config: webpack.Configuration = {
  mode: "development",
  devtool: "source-map",
  entry: path.resolve(__dirname, "src/index.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [{ test: "/.tsx?$/", loader: "ts-loader" }],
  },
  devServer: {
    static: path.resolve(__dirname, "public"),
    port: 8000,
  },
};

export default config;
