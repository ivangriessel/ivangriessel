const markdownIt = require("markdown-it");
const md = new markdownIt();

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addFilter("md", (content) => md.renderInline(content));

  return {
    dir: {
      input: "src",
      output: "docs",
      includes: "_includes",
    },
  };
};
