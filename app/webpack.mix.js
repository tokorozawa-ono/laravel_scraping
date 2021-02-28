const mix = require('laravel-mix');
const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

let config = {}
config.plugins = [];
config.plugins.push(
    new Dotenv()
);
config.plugins.push(
    new webpack.ProvidePlugin({
        Promise: 'es6-promise',
    })
);
mix.webpackConfig(config);

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css');
