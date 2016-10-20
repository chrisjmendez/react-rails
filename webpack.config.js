
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
  exclude: /node_modules/,
  module: {
    //D. Since we're dealing with ES6, we need to configure Babel loader
    loaders: [{ 
      test: /\.jsx$/, 
      loader: "babel-loader" ,
      query: {
        presets:['react']
      }
    }]
  },
  externals: {
    // Don't bundle the 'react' npm package with the component.
    //'react': 'React'
    React: 'react'
  }
};
