const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
    eleventyConfig.addFilter("date", (dateObj, format = "MMMM d, yyyy") => {
        let dt = typeof dateObj === "string"
            ? DateTime.fromISO(dateObj)
            : DateTime.fromJSDate(dateObj);
        return dt.toFormat(format);
    });

    // Add more filters here as needed
};
