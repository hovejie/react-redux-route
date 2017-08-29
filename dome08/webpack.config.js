var path = require('path')
var webpack = require('webpack')

module.exports = {
	devtool: 'inline-source-map',
	entry: [
		path.resolve(__dirname,'index.js')
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	module:{
		loaders:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				loader:'babel-loader',
				query:{
					presets:['es2015','stage-1','react']
				}
			},
			{
				test:/\.js[x]$/,
				exclude:/node_modules/,
				loader:'babel-loader',
				query:{
					presets:['es2015','stage-1','react']
				}
			}
			//{test:/\.scss$/,loader:'style!css!sass'},
		]
	}
}
