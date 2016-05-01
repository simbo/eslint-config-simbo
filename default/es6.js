'use strict';

module.exports = {

  extends: 'simbo/default',

  env: {
    es6: true
  },

  rules: {

    /**
     * ECMAScript 6
     * ============
     * These rules are only relevant to ES6 environments.
     */

    // require braces around arrow function bodies
    'arrow-body-style': [2, 'as-needed'],
    // require parens in arrow function arguments
    'arrow-parens': [2, 'always'],
    // require space before/after arrow function's arrow
    'arrow-spacing': [2, {
      before: true,
      after: true
    }],
    // verify calls of super() in constructors
    'constructor-super': 2,
    // enforce spacing around the * in generator functions
    'generator-star-spacing': [2, {
      before: true,
      after: false
    }],
    // disallow modifying variables of class declarations
    'no-class-assign': 2,
    // disallow modifying variables that are declared using const
    'no-const-assign': 2,
    // disallow duplicate name in class members
    'no-dupe-class-members': 2,
    // disallow use of this/super before calling super() in constructors.
    'no-this-before-super': 2,
    // require let or const instead of var
    'no-var': 2,
    // require method and property shorthand syntax for object literals
    'object-shorthand': [2, 'always'],
    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': 2,
    // suggest using const declaration for variables that are never modified after declared
    'prefer-const': 2,
    // suggest using the spread operator instead of .apply().
    'prefer-spread': 2,
    // suggest using Reflect methods where applicable
    'prefer-reflect': 2,
    // suggest using template literals instead of strings concatenation
    'prefer-template': 2,
    // disallow generator functions that do not have yield
    'require-yield': 2

  }

};
