const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	resolve: {
		extensions: ['.vue', '.js', '.css']
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				exclude: /node_modules/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				use: [
					process.env.NODE_ENV !== 'production'
						? 'vue-style-loader'
						: MiniCssExtractPlugin.loader,
					'css-loader'
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		}),
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: 'style.css'
		})

	]
};