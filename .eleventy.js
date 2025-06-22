export default function(eleventyConfig) {
	eleventyConfig.setInputDirectory("src");
    eleventyConfig.setOutputDirectory("public");
    eleventyConfig.addPassthroughCopy("src/styles.css");
    eleventyConfig.addPassthroughCopy("src/images/");
    eleventyConfig.addPassthroughCopy("src/fonts/");

    // random number generator
    eleventyConfig.addShortcode("randomInteger", (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
});``
};