// Source: https://webpack.github.io/docs/tutorials/getting-started#config-file
module.exports = {
	//A. This points to the new directory for your main.jsx
    entry: "./app/assets/javascripts/frontend/main.jsx",
    output: {
		//B. By placing this here, you don't have to change your rails app
        path: __dirname + "/app/assets/javascripts",
        filename: "bundle.js"
    },
	//C. This resolve option simplifies your life by asking Webpack to figure stuff what 
	//		extensions to use while resolving dependencies.
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	// "Add presets option to Babel-loader"
	
	//http://stackoverflow.com/questions/33460420/babel-loader-jsx-syntaxerror-unexpected-token?answertab=votes#tab-top
	//http://stackoverflow.com/questions/33509770/react-babel-webpack-not-parsing-jsx-code
	//http://stackoverflow.com/questions/33460420/babel-loader-jsx-syntaxerror-unexpected-token
	exclude: /node_modules/,
	query: {
		presets:['es2015', "stage-0", 'react']
	},
    module: {
        loaders: [
			//C. Since we're dealing with ES6, we need to configure Babel loader
            { test: /\.jsx$/, loader: "babel-loader" }
        ]
    }
};