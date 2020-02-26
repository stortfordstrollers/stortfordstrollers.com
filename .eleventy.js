// add yaml support with npm install js-yaml --save-dev
const yaml = require( 'js-yaml' );

module.exports = function( eleventyConfig ) {
	eleventyConfig.setTemplateFormats( 'html,md' );

	eleventyConfig.addPassthroughCopy( 'assets' );
	eleventyConfig.addPassthroughCopy( 'img' );
	eleventyConfig.addPassthroughCopy( 'css' );
	eleventyConfig.addPassthroughCopy( 'js' );
	eleventyConfig.addPassthroughCopy( 'fonts' );
	eleventyConfig.addPassthroughCopy( 'favicon' );
	eleventyConfig.addPassthroughCopy( 'robots.txt' );
	eleventyConfig.addPassthroughCopy( '404.html' );
	eleventyConfig.addPassthroughCopy( 'google0807158b843a6325.html' );

	eleventyConfig.addDataExtension( 'yml', contents => yaml.safeLoad( contents ) );

	eleventyConfig.setBrowserSyncConfig( {
		ui: false,
		ghostMode: false
	} );

	return {
		dir: {
			layouts: '_layouts'
		}
	};
};
