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
    main: './src/js/main/index.ts',
    primary: './src/js/primary/index.ts',
    secondary: './src/js/secondary/index.ts',
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
        use: 'babel-loader',
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
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
        test: /\.mp4$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'videos/[name].[ext]',
          },
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
                  {
                    tag: "source",
                    attribute: "src",
                    type: "src"
                  }
                ],
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]/[name].bundle.css',
      chunkFilename: '[id].css',
    }),
    ...htmlPlugins
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'common',
    },
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false
      }),
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build'),
    },
    port: 3000,
  },
};