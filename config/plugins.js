const readingTime = require('eleventy-plugin-reading-time');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = (eleventyConfig) => {
    eleventyConfig.addPlugin(readingTime);
    eleventyConfig.addPlugin(syntaxHighlight);
};