const path = require('path')
const webpack = require('webpack')
const WebpackShellPlugin = require('webpack-shell-plugin')
const merge = require('webpack-merge')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, './public/_js/')
}

const localDeploy      = require('./config.json'),
      themeName        = localDeploy.theme_name,
      deployFolder     = localDeploy.output + '/' + themeName + '/library/';

// Watch
const common = {
  entry: {
    app: ['./public/_js/index.js']
  },
  output: {
    path: path.resolve(__dirname, deployFolder),
    filename: '[name].bundle.js',
    publicPath: deployFolder
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.sass|css$/,
        loaders: [
          "style",
          "css",
          "sass"
        ]
      },{
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  externals: {
    "jquery": "$"
  }
};

// Build
if(TARGET === 'watch' || !TARGET) {
  module.exports = merge(common, {});
  module.exports.plugins = (module.exports.plugins || []).concat([
    //new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"shuffle", /* filename= */"shuffle.bundle.js", Infinity),
    new WebpackShellPlugin({
      onBuildStart:[
        'echo "Webpack Run"'
      ],
      onBuildEnd:[
        'npm run watchjade',
        'echo "Webpack Done"'
      ]
    })
  ])
}

if(TARGET === 'build') {
  module.exports = merge(common, {});
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    //new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"shuffle", /* filename= */"shuffle.bundle.js", Infinity),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    new webpack.NoErrorsPlugin(),
    new WebpackShellPlugin({
      onBuildStart:[
        'echo "Webpack Run"'
      ],
      onBuildEnd:[
        'npm run ftp-deploy',
        'echo "Webpack Done"'
      ]
    })
  ])
}