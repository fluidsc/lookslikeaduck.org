export default function(eleventyConfig) {
	eleventyConfig.setInputDirectory("src");
    eleventyConfig.setOutputDirectory("public");
    eleventyConfig.addPassthroughCopy("src/styles.css");
    eleventyConfig.addPassthroughCopy("src/images/");
};