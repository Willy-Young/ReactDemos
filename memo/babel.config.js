/* eslint-disable no-undef */
module.exports = api => {
	api.cache.using(() => process.env.NODE_ENV === 'dev');
	
	const presets = ['@babel/preset-env', '@babel/react'];
	const plugins = [
		
		// Stage 1
		'@babel/plugin-proposal-export-default-from',
		'@babel/plugin-proposal-logical-assignment-operators',
		['@babel/plugin-proposal-optional-chaining', { loose: false }],
		['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
		['@babel/plugin-proposal-nullish-coalescing-operator', { loose: false }],
		'@babel/plugin-proposal-do-expressions',
		
		// Stage 2
		['@babel/plugin-proposal-decorators', { legacy: true }],
		'@babel/plugin-proposal-function-sent',
		'@babel/plugin-proposal-export-namespace-from',
		'@babel/plugin-proposal-numeric-separator',
		'@babel/plugin-proposal-throw-expressions',
		
		// Stage 3
		'@babel/plugin-syntax-dynamic-import',
		'@babel/plugin-syntax-import-meta',
		['@babel/plugin-proposal-class-properties', { loose: true }],
		'@babel/plugin-proposal-json-strings',
	];
	
	return {
		presets,
		plugins,
	};
};
