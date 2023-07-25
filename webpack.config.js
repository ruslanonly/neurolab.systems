const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlNames = ['main', 'primary', 'secondary'];
const htmlPlugins = htmlNames.map((fileName) => {
  return new HtmlWebpackPlugin({
    template: `src/html/${fileName}.html`,
    filename: `${fileName}.html`,
    chunks: [fileName],
    minify: false
  });
});

module.exports = {
  entry: {
    main: './src/js/main/index.js',
    primary: './src/js/primary/index.js',
    secondary: './src/js/secondary/index.js',
  },
  output: {
    filename: '[name]/[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(svg|png|jpg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]',
        },
      },  
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: false,
              sources: {
                list: [
                  {
                    tag: 'img',
                    attribute: 'src',
                    type: 'src',
                  },
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.mp4$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'videos/[name].[ext]',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.mp4']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]/[name].bundle.css',
      chunkFilename: '[id].css'
    }),
    ...htmlPlugins
  ],
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: 'all',
      name: 'common',
    },
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build'),
    },
    port: 3000,
  },
};