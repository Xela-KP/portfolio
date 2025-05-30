module.exports = function (eleventyConfig) {
    eleventyConfig.addCollection("projects", coll =>
        coll.getFilteredByGlob("src/content/projects/*.md")
            .sort((a, b) => b.date - a.date)
    );

    // Add more collections here as needed
};