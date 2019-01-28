const withCSS = require('@zeit/next-css');

module.exports = withCSS({
	webpack: config => Object.assign(config, {
		target: 'electron-renderer',
		devtool: 'cheap-module-source-map',
		plugins: config.plugins.filter(p => p.constructor.name !== 'UglifyJsPlugin')
	}),
	exportPathMap: () => ({
		'/about': {page: '/about'},
		'/login': {page: '/login'}
	})
});
