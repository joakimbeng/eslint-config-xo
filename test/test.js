'use strict';
var test = require('ava');
var isPlainObj = require('is-plain-obj');
var eslint = require('eslint');
var tempWrite = require('temp-write');
var clearRequire = require('clear-require');

function clearRequires() {
	['./', './esnext', './browser'].map(clearRequire);
}

function runEslint(str, conf) {
	var linter = new eslint.CLIEngine({
		useEslintrc: false,
		configFile: tempWrite.sync(JSON.stringify(conf))
	});

	return linter.executeOnText(str).results[0].messages;
}

test('main', function (t) {
	clearRequires();
	var conf = require('../');

	t.true(isPlainObj(conf));
	t.true(isPlainObj(conf.env));
	t.true(isPlainObj(conf.rules));

	var errors = runEslint('\'use strict\';\nconsole.log("unicorn")\n', conf);
	t.is(errors[0].ruleId, 'quotes');
	t.is(errors[1].ruleId, 'semi');

	t.end();
});

test('esnext', function (t) {
	clearRequires();
	var conf = require('../esnext');

	t.true(isPlainObj(conf));
	t.true(isPlainObj(conf.env));
	t.true(isPlainObj(conf.rules));

	var errors = runEslint('class Foo {}\n', conf);
	t.is(errors[0].ruleId, 'no-unused-vars');

	t.end();
});

test('esnext es2016', function (t) {
	clearRequires();

	var conf = require('../esnext');

	t.true(isPlainObj(conf));
	t.true(isPlainObj(conf.env));
	t.true(isPlainObj(conf.rules));

	var errors = runEslint('const x = {a: 0};\nasync function z() {\n\treturn Promise.resolve({b: 1, ...x});\n}\n', conf);
	t.is(errors[0].ruleId, 'no-unused-vars');

	t.end();
});

test('browser', function (t) {
	clearRequires();
	var conf = require('../browser');

	t.true(isPlainObj(conf));
	t.true(isPlainObj(conf.env));
	t.true(isPlainObj(conf.rules));

	var errors = runEslint('\'use strict\';\nprocess.exit();\n', conf);
	t.is(errors[0].ruleId, 'no-undef');

	t.end();
});
