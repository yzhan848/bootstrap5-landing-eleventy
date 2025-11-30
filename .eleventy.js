module.exports = function(eleventyConfig) {
  // 確保 assets 會被複製到 _site/assets 底下
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  return {
    // ⚠️ 這裡要填你的 repo 名稱（如果 repo 名稱不同要改）
    pathPrefix: "/bootstrap5-landing-eleventy/",
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    },
    templateFormats: ["njk", "html", "md"]
  };
};
