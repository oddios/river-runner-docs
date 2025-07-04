module.exports = function(eleventyConfig) {
  // ✅ Inside the function: use eleventyConfig here
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");

  eleventyConfig.setServerOptions({
    watch: ["css/**/*.css", "js/**/*.js"] // 👈 Watch for changes in serve mode
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "html", "md"]
  };
};
