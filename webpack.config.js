var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool : 'eval-source-map',   

	entry: __dirname + "/app/main.js",  // 唯一的入口文件

	output: {
		path: __dirname + "/build",  // 打包处理后文件存放的位置
		filename: "bundle.js"  // 打包处理后输出文件的文件名
	},

	module: { // 在配置文件中添加JSON loader
		loaders: [
			{
				test: /\.json$/,
				loader: "json-loader"
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},{
				test: /\.css$/,
				loader: "style-loader!css-loader?modules"
			}
		]
	},
	/*postcss: [  //使用postcss-loader 问题未解决
		require('autoprefixer')   // 调用autoprefixer插件
	],*/
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + "/app/index.tmpl.html"
		}),
		new webpack.HotModuleReplacementPlugin() //加入热加载插件实例
	],
	devServer: {
		contentBase: "./public",  //本地服务器所加载页面的所在目录
		//colors: true,   终端中输出文件为彩色，配置项不可用
		historyApiFallback: true,  // 跳转回index.html
		inline: true,  // 修改后自动刷新
		port: 7070,
		hot: true
	}
}
