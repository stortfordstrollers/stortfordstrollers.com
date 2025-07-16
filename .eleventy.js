// add yaml support with npm install js-yaml --save-dev
const yaml = require( 'js-yaml' );
const date_fns = require( 'date-fns' );

const markdownItAttrs = require( 'markdown-it-attrs' );
const markdownItAnchor = require( 'markdown-it-anchor' );

module.exports = function( eleventyConfig ) {
	eleventyConfig.setTemplateFormats( 'html,md,liquid' );
	eleventyConfig.setQuietMode( true );

	eleventyConfig.addPassthroughCopy( 'assets' );
	eleventyConfig.addPassthroughCopy( 'css' );
	eleventyConfig.addPassthroughCopy( 'favicon' );
	eleventyConfig.addPassthroughCopy( 'fonts' );
	eleventyConfig.addPassthroughCopy( 'img' );
	eleventyConfig.addPassthroughCopy( 'js' );
	eleventyConfig.addPassthroughCopy( 'masters' );

	eleventyConfig.addPassthroughCopy( 'robots.txt' );
	eleventyConfig.addPassthroughCopy( '404.html' );
	eleventyConfig.addPassthroughCopy( 'google0807158b843a6325.html' );
	eleventyConfig.addPassthroughCopy( '*.ics' );

	eleventyConfig.amendLibrary( 'md', ( mdLib ) => mdLib.use( markdownItAttrs ) );
	eleventyConfig.amendLibrary( 'md', ( mdLib ) => mdLib.use( markdownItAnchor ) );

	eleventyConfig.addFilter( 'dump', function( anything ) {
		console.log( 'dump:', anything );
	} );

	eleventyConfig.addFilter( 'dateFormat', function( value, formatDate ) {
		let dateValue = new Date( value );

		return date_fns.format( dateValue, formatDate );
	} );

	eleventyConfig.addShortcode( 'emoji', function ( emoji, alt = '' ) {
		return (
			`<span aria-hidden="true" class="emoji">${emoji}</span>` +
			(alt ? `<span class="sr-only">${alt}</span>` : "")
		);
	});

	eleventyConfig.addShortcode( 'year', () => `${ new Date().getFullYear() }`);

	eleventyConfig.addDataExtension( 'yml', contents => yaml.safeLoad( contents ) );

	eleventyConfig.setBrowserSyncConfig( {
		ui: false
		,ghostMode: false
		,logLevel: 'silent'
	} );
};
