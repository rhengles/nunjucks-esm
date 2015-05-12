
function precompileESM(templates, opts) {
	var out = '', name, template, eol;
	opts = opts || {};
	eol = opts.eol || '\n';

	out = 'var templates = {};' + eol;

	for ( var i = 0; i < templates.length; i++ ) {
		name = JSON.stringify(templates[i].name);
		template = templates[i].template;

		out += 'templates[' + name + '] = ' +
			'(function() {' + eol + template + eol +
			'})();' + eol;
	}

	out += 'export default templates;' + eol;
	return out;
}

module.exports.wrapper = precompileESM;
