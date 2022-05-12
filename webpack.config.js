const path = require("path");
const webpack = require("webpack");

module.exports = {
	context: __dirname,
	entry: "./src/index.js",
	devtool: "eval",
	output: {
		path: path.join(__dirname, "/"),
		filename: "bundle.js",
		publicPath: "/"
	},
	devServer: {
		publicPath: "/"
	},
	resolve: {
		extensions: [".js", ".json"]
	},
	stats: {
		colors: true,
		reasons: true,
		chunks: true
	},
	module: {
		rules: [
			{
				exclude: "/node_modules",
				test: /\.js$/,
				loader: "babel-loader"
			},
			{
				test: /\.json$/,
				loader: "json-loader"
			}
		]
	}	
}
