
const filters = require('./config/filters');
const plugins = require('./config/plugins');
const collections = require('./config/collections');
const passthrough = require('./config/passthrough');
const globalData = require('./config/globalData');

const prod = process.env.ELEVENTY_ENV === "production";

module.exports = function (eleventyConfig) {
    plugins(eleventyConfig);
    filters(eleventyConfig);
    collections(eleventyConfig);
    passthrough(eleventyConfig);
    globalData(eleventyConfig);
    return {
        dir: {
            input: "src/",
            includes: "_includes",
            layouts: "_layouts",
            output: "_dist"
        },
        pathPrefix: prod ? "/portfolio/" : "/"
    };
};