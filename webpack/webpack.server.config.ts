import path from "path";
import { DefinePlugin } from "webpack";
import DotenvWebpack from 'dotenv-webpack';
import dotenv from 'dotenv';
import webpackNodeExternals from "webpack-node-externals";
import { commonConfig } from './common';
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import CopyPlugin from 'copy-webpack-plugin';

dotenv.config();

const DEV = process.env.NODE_ENV !== 'production';

const config = {
   ...commonConfig,
   entry: { router: path.resolve(__dirname, "../server/server.ts") },
   output: {
      path: path.resolve(__dirname, "../build"),
      filename: "bundle.js",
      chunkFilename: "bundle-[chunkhash:7].js",
      publicPath: "build/",
   },
   target: 'async-node',

   module: {
      rules: [
         {
            test: /\.(ts|js)x?$/i,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader",
               options: {
                  presets: [
                     "@babel/preset-react",
                     "@babel/preset-typescript",
                     [
                        '@babel/env',
                        {
                           targets: {
                              browsers: ['last 2 versions'],
                           }
                        }
                     ],
                  ],
                  plugins: [
                     "transform-class-properties",
                     ['babel-plugin-styled-components', {
                        ssr: true,
                        minify: !DEV,
                        displayName: DEV,
                        fileName: DEV,
                     }],
                     "@react-loadable/revised/babel",
                  ],
               },
            },
         },
         {
            test: /\.(jpe?g|png|svg)$/,
            loader: 'url-loader',
            options: {
               limit: 1000,
               name: '[hash:16].[ext]',
               fallback: 'file-loader',
               emitFile: false,
            },
         },
         DEV ? {
            test: /\.js$/,
            enforce: 'pre',
            use: ['source-map-loader'],
            exclude: [/node_modules/],
         } : {}
      ],
   },
   externals: [
      webpackNodeExternals({
         modulesDir: path.resolve(__dirname, '../node_modules'),
      })
   ],
   plugins: [
      new CopyPlugin({
         patterns: [{
            from: path.resolve(__dirname, "../assets/*"),
            to: path.resolve(__dirname, "../build/public/"),
         }, {
            from: path.resolve(__dirname, "../cert/*"),
            to: path.resolve(__dirname, "../build/"),
         }]
      }),
      new ForkTsCheckerWebpackPlugin(),
      new ESLintPlugin({
         extensions: ["ts", "tsx"],
      }),
      new DotenvWebpack(),
      new DefinePlugin({
         DEV: JSON.stringify(process.env.NODE_ENV !== 'production'),
         VARIABLES: JSON.stringify(process.env.VARIABLES),
         SERVER_BUILD: JSON.stringify(true),
         API_HOST_URL: JSON.stringify(process.env.API_HOST_URL),
         API_HOST_PORT: JSON.stringify(process.env.API_HOST_PORT),
         API_HOST_PROTOCOL: JSON.stringify(process.env.API_HOST_PROTOCOL),
      }),
   ],
};

export default config;
