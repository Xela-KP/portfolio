const { DateTime } = require("luxon");

const prod = process.env.ELEVENTY_ENV === "production";

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");

    eleventyConfig.addFilter("date", (dateObj, format = "MMMM d, yyyy") => {
        let dt = typeof dateObj === "string"
            ? DateTime.fromISO(dateObj)
            : DateTime.fromJSDate(dateObj);
        return dt.toFormat(format);
    });

    eleventyConfig.addCollection("tagList", collection => {
        let tagSet = new Set();
        collection.getFilteredByGlob("posts/*.md")
            .forEach(item => {
                (item.data.tags || []).forEach(tag => tagSet.add(tag));
            });
        return [...tagSet].sort();
    });

    eleventyConfig.addCollection("posts", collection => {
        return collection.getFilteredByGlob("posts/*.md")
            .sort((a, b) => b.date - a.date)
    });

    eleventyConfig.addGlobalData("site", {
        url: "https://Xela-KP.github.io/portfolio",  // your production URL
        title: "Alexander King Perocho",
        description: "My portfolio and blog about software development, Eleventy, and more",
        author: "Alexander King Perocho",
        authorUrl: "https://Xela-KP.github.io/portfolio/about/"
    });

    return {
        dir: {
            input: ".",
            includes: "_includes",
            layouts: "_layouts",
            js: "_js",
            output: "_site"
        },
        pathPrefix: prod ? "/portfolio/" : "/"
    };
};