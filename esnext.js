'use strict';
var def = require('./');

def.parser = 'babel-eslint';

def.plugins = ['babel'];

def.ecmaFeatures = {
	arrowFunctions: true,
	binaryLiterals: true,
	blockBindings: true,
	classes: true,
	defaultParams: true,
	destructuring: true,
	experimentalObjectRestSpread: true,
	forOf: true,
	generators: true,
	globalReturn: true,
	modules: true,
	objectLiteralComputedProperties: true,
	objectLiteralDuplicateProperties: true,
	objectLiteralShorthandMethods: true,
	objectLiteralShorthandProperties: true,
	octalLiterals: true,
	regexUFlag: true,
	regexYFlag: true,
	restParams: true,
	spread: true,
	superInFunctions: true,
	templateStrings: true,
	unicodeCodePointEscapes: true
};

def.env.es6 = true;
def.rules['no-var'] = 2;
def.rules['prefer-arrow-callback'] = 2;
def.rules['prefer-const'] = 2;
def.rules['prefer-reflect'] = [2, {exceptions: ['delete']}];
def.rules['prefer-template'] = 2;
def.rules['prefer-spread'] = 2;
def.rules['babel/object-shorthand'] = [2, 'always'];
def.rules['babel/generator-star-spacing'] = def.rules['generator-star-spacing'];
def.rules['babel/arrow-parens'] = def.rules['arrow-parens'];
def.rules['babel/object-curly-spacing'] = def.rules['object-curly-spacing'];
def.rules['object-shorthand'] = 0;
def.rules['generator-star-spacing'] = 0;
def.rules['arrow-parens'] = 0;
def.rules['object-curly-spacing'] = 0;

module.exports = def;
