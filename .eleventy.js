module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    return {
        dir: {
            input: ".",
            includes: "_includes",
            layouts: "_layouts",
            output: "_site"
        }
    };
};
  