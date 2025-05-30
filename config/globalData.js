module.exports = function (eleventyConfig) {
    eleventyConfig.addGlobalData("site", {
        url: "https://Xela-KP.github.io/portfolio",
        title: "Alexander King Perocho",
        description: "My portfolio and blog about software development, Eleventy, and more",
        author: "Alexander King Perocho",
        authorUrl: "https://Xela-KP.github.io/portfolio/about/"
    });

    // Add more global data here if needed
};