const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: [
		"./src/main.js",  // main js file
		"./src/main.scss"  // main scss file
	],
	output: {
		filename: 'main.js',
		path: __dirname + '/dist'
	},
	module: {
		rules: [{
			test: /\.scss$/,
			use: [
				MiniCssExtractPlugin.loader,
				"css-loader",
				"sass-loader"
			]
		}]
	},
	plugins: [
		// copy css output to new file
		new MiniCssExtractPlugin({
			filename: "main.scss"  // output filename
			// chunkFilename: "main.bundle.css"  // ??
		}),
		// copy static files to dist
		new CopyWebpackPlugin([
            { 
            	from: './src/**/*.bmp', 
            	to: __dirname + '/dist',
            	// test: /(.+)\.bmp/
            } 
        ])
	]
};
