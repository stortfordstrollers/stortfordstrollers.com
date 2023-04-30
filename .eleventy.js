// add yaml support with npm install js-yaml --save-dev
const yaml = require( 'js-yaml' );

module.exports = function( eleventyConfig ) {
	eleventyConfig.setTemplateFormats( 'html,md' );
	eleventyConfig.setQuietMode( true );

	eleventyConfig.addPassthroughCopy( 'assets' );
	eleventyConfig.addPassthroughCopy( 'css' );
	eleventyConfig.addPassthroughCopy( 'favicon' );
	eleventyConfig.addPassthroughCopy( 'fonts' );
	eleventyConfig.addPassthroughCopy( 'img' );
	eleventyConfig.addPassthroughCopy( 'js' );

	eleventyConfig.addPassthroughCopy( 'robots.txt' );
	eleventyConfig.addPassthroughCopy( '404.html' );
	eleventyConfig.addPassthroughCopy( 'google0807158b843a6325.html' );

	eleventyConfig.addFilter( 'dump', function( anything ) {
		console.log( 'dump:', anything );
	} );

	eleventyConfig.addShortcode( 'year', () => `${ new Date().getFullYear() }`);

	eleventyConfig.addDataExtension( 'yml', contents => yaml.safeLoad( contents ) );

	eleventyConfig.setBrowserSyncConfig( {
		ui: false
		,ghostMode: false
		,logLevel: 'silent'
	} );
};
