/* eslint-env node */
'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

/**
 * copy and paste from https://github.com/machty/ember-concurrency/blob/master/ember-cli-build.js
 * to get regenerators working
 */
module.exports = function(defaults) {
  var includePolyfill = process.env.EMBER_ENV === 'production' || process.env.CI;

  var babelOptions = {
    optional: ['es7.decorators']
  };

  if (includePolyfill) {
    babelOptions.includePolyfill = true;
  } else {
    babelOptions.blacklist = ['regenerator'];
  }

  var app = new EmberAddon(defaults, {
    minifyJS: {
      enabled: false
    },

    snippetPaths: ['tests/dummy/snippets'],
    snippetSearchPaths: ['app', 'tests/dummy/app', 'addon'],

    emberCliFontAwesome: {
      useScss: true
    },

    babel: babelOptions,
  });


  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
