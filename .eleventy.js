module.exports = function(eleventyConfig) {
  // 把 src/assets 複製到輸出資料夾的 /assets
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  return {
    // ⚠ repo 名稱（如果你的 GitHub repo 不是這個，要改成一樣的）
    pathPrefix: "/bootstrap5-landing-eleventy/",
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    },
    templateFormats: ["njk", "html", "md"]
  };
};
