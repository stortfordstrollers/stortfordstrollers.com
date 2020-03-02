let url;

switch ( process.env.ELEVENTY_ENV ) {
	case 'production':
		url = 'https://www.stortfordstrollers.com/';
	break;

	case 'development':
		url = 'http://localhost:8080/';
	break;

	default:
		url = '/';
}

module.exports = {
	url: url
	,title: 'Stortford Strollers Walking Basketball Club'
	,environment: process.env.ELEVENTY_ENV
};
