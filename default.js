'use strict';

module.exports = {

    /**
     * Specifying Environments
     * =======================
     * An environment defines global variables that are predefined.
     * The available environments are:
     */

    env: {

        // browser global variables.
        browser: false,
        // Node.js global variables and Node.js scoping.
        node: false,
        // CommonJS global variables and CommonJS scoping (use this for browser-only code that uses Browserify/WebPack).
        commonjs: false,
        // web workers global variables.
        worker: false,
        // defines require() and define() as global variables as per the amd spec.
        amd: false,
        // adds all of the Mocha testing global variables.
        mocha: false,
        // adds all of the Jasmine testing global variables for version 1.3 and 2.0.
        jasmine: false,
        // Jest global variables.
        jest: false,
        // PhantomJS global variables.
        phantomjs: false,
        // Protractor global variables.
        protractor: false,
        // QUnit global variables.
        qunit: false,
        // jQuery global variables.
        jquery: false,
        // Prototype.js global variables.
        prototypejs: false,
        // ShellJS global variables.
        shelljs: false,
        // Meteor global variables.
        meteor: false,
        // MongoDB global variables.
        mongo: false,
        // AppleScript global variables.
        applescript: false,
        // Service Worker global variables.
        serviceworker: false,
        // Ember test helper globals.
        embertest: false,
        // enable all ECMAScript 6 features except for modules.
        es6: false

    },


    /**
     * Rules
     * =====
     * Rules in ESLint are divided into several categories to help you better understand their value.
     */

    rules: {


        /**
         * Possible Errors
         * ===============
         * The following rules point out areas where you might have made mistakes.
         */

        // disallow or enforce trailing commas (recommended)
        'comma-dangle': [2, 'never'],
        // disallow assignment in conditional expressions (recommended)
        'no-cond-assign': 2,
        // disallow use of console in the node environment (recommended)
        'no-console': 1,
        // disallow use of constant expressions in conditions (recommended)
        'no-constant-condition': 2,
        // disallow control characters in regular expressions (recommended)
        'no-control-regex': 2,
        // disallow use of debugger (recommended)
        'no-debugger': 2,
        // disallow duplicate arguments in functions (recommended)
        'no-dupe-args': 2,
        // disallow duplicate keys when creating object literals (recommended)
        'no-dupe-keys': 2,
        // disallow a duplicate case label. (recommended)
        'no-duplicate-case': 2,
        // disallow the use of empty character classes in regular expressions (recommended)
        'no-empty-character-class': 2,
        // disallow empty statements (recommended)
        'no-empty': 2,
        // disallow assigning to the exception in a catch block (recommended)
        'no-ex-assign': 2,
        // disallow double-negation boolean casts in a boolean context (recommended)
        'no-extra-boolean-cast': 2,
        // disallow unnecessary parentheses
        'no-extra-parens': 2,
        // disallow unnecessary semicolons (recommended) (fixable)
        'no-extra-semi': 2,
        // disallow overwriting functions written as function declarations (recommended)
        'no-func-assign': 2,
        // disallow function or variable declarations in nested blocks (recommended)
        'no-inner-declarations': 2,
        // disallow invalid regular expression strings in the RegExp constructor (recommended)
        'no-invalid-regexp': 2,
        // disallow irregular whitespace outside of strings and comments (recommended)
        'no-irregular-whitespace': 2,
        // disallow negation of the left operand of an in expression (recommended)
        'no-negated-in-lhs': 2,
        // disallow the use of object properties of the global object (Math and JSON) as functions (recommended)
        'no-obj-calls': 2,
        // disallow multiple spaces in a regular expression literal (recommended)
        'no-regex-spaces': 2,
        // disallow sparse arrays (recommended)
        'no-sparse-arrays': 2,
        // disallow unreachable statements after a return, throw, continue, or break statement (recommended)
        'no-unreachable': 2,
        // disallow comparisons with the value NaN (recommended)
        'use-isnan': 2,
        // Ensure JSDoc comments are valid
        'valid-jsdoc': 2,
        // Ensure that the results of typeof are compared against a valid string (recommended)
        'valid-typeof': 2,
        // Avoid code that looks like two expressions but is actually one
        'no-unexpected-multiline': 2,


        /**
         * Best Practices
         * ==============
         * These are rules designed to prevent you from making mistakes.
         * They either prescribe a better way of doing something or help you avoid footguns.
         */

        // Enforces getter/setter pairs in objects
        'accessor-pairs': 2,
        // treat var statements as if they were block scoped
        'block-scoped-var': 2,
        // specify the maximum cyclomatic complexity allowed in a program
        complexity: [1, 5],
        // require return statements to either always or never specify values
        'consistent-return': 0,
        // specify curly brace conventions for all control statements
        curly: 2,
        // require default case in switch statements
        'default-case': 2,
        // encourages use of dot notation whenever possible
        'dot-notation': [2, {
            allowKeywords: true
        }],
        // enforces consistent newlines before or after dots
        'dot-location': [2, 'property'],
        // require the use of === and !== (fixable)
        eqeqeq: [2, 'smart'],
        // make sure for-in loops have an if statement
        'guard-for-in': 0,
        // disallow the use of alert, confirm, and prompt
        'no-alert': 2,
        // disallow use of arguments.caller or arguments.callee
        'no-caller': 2,
        // disallow division operators explicitly at beginning of regular expression
        'no-div-regex': 2,
        // disallow else after a return in an if
        'no-else-return': 2,
        // disallow use of labels for anything other than loops and switches
        'no-empty-label': 2,
        // disallow comparisons to null without a type-checking operator
        'no-eq-null': 2,
        // disallow use of eval()
        'no-eval': 2,
        // disallow adding to native types
        'no-extend-native': 2,
        // disallow unnecessary function binding
        'no-extra-bind': 2,
        // disallow fallthrough of case statements (recommended)
        'no-fallthrough': 2,
        // disallow the use of leading or trailing decimal points in numeric literals
        'no-floating-decimal': 2,
        // disallow the type conversions with shorter notations
        'no-implicit-coercion': 2,
        // disallow use of eval()-like methods
        'no-implied-eval': 2,
        // disallow this keywords outside of classes or class-like objects
        'no-invalid-this': 0,
        // disallow usage of __iterator__ property
        'no-iterator': 2,
        // disallow use of labeled statements
        'no-labels': 0,
        // disallow unnecessary nested blocks
        'no-lone-blocks': 2,
        // disallow creation of functions within loops
        'no-loop-func': 2,
        // disallow use of multiple spaces
        'no-multi-spaces': [2, {
            exceptions: {
                Property: true,
                VariableDeclarator: true
            }
        }],
        // disallow use of multiline strings
        'no-multi-str': 2,
        // disallow reassignments of native objects
        'no-native-reassign': 2,
        // disallow use of new operator for Function object
        'no-new-func': 2,
        // disallows creating new instances of String,Number, and Boolean
        'no-new-wrappers': 2,
        // disallow use of the new operator when not part of an assignment or comparison
        'no-new': 2,
        // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
        'no-octal-escape': 2,
        // disallow use of octal literals (recommended)
        'no-octal': 2,
        // disallow reassignment of function parameters
        'no-param-reassign': 0,
        // disallow use of process.env
        'no-process-env': 0,
        // disallow usage of __proto__ property
        'no-proto': 2,
        // disallow declaring the same variable more than once (recommended)
        'no-redeclare': [2, {
            builtinGlobals: true
        }],
        // disallow use of assignment in return statement
        'no-return-assign': 2,
        // disallow use of javascript: urls.
        'no-script-url': 2,
        // disallow comparisons where both sides are exactly the same
        'no-self-compare': 2,
        // disallow use of the comma operator
        'no-sequences': 2,
        // restrict what can be thrown as an exception
        'no-throw-literal': 2,
        // disallow usage of expressions in statement position
        'no-unused-expressions': 2,
        // disallow unnecessary .call() and .apply()
        'no-useless-call': 2,
        // disallow unnecessary concatenation of literals or template literals
        'no-useless-concat': 2,
        // disallow use of the void operator
        'no-void': 2,
        // disallow usage of configurable warning terms in comments
        'no-warning-comments': [1, {
            terms: ['todo', 'fixme'],
            location: 'anywhere'
        }],
        // disallow use of the with statement
        'no-with': 2,
        // require use of the second argument for parseInt()
        radix: 2,
        // require declaration of all vars at the top of their containing scope
        'vars-on-top': 2,
        // require immediate function invocation to be wrapped in parentheses
        'wrap-iife': [2, 'inside'],
        // require or disallow Yoda conditions
        yoda: 2,


        /**
         * Strict Mode
         * ===========
         * These rules relate to using strict mode.
         */

        // controls location of Use Strict Directives
        strict: [2, 'global'],


        /**
         * Variables
         * =========
         * These rules have to do with variable declarations.
         */

        // enforce or disallow variable initializations at definition
        'init-declarations': 0,
        // disallow the catch clause parameter name being the same as a variable in the outer scope
        'no-catch-shadow': 0,
        // disallow deletion of variables (recommended)
        'no-delete-var': 2,
        // disallow labels that share a name with a variable
        'no-label-var': 2,
        // disallow shadowing of names such as arguments
        'no-shadow-restricted-names': 0,
        // disallow declaration of variables already declared in the outer scope
        'no-shadow': 0,
        // disallow use of undefined when initializing variables
        'no-undef-init': 0,
        // disallow use of undeclared variables unless mentioned in a /*global */ block (recommended)
        'no-undef': 2,
        // disallow use of undefined variable
        'no-undefined': 0,
        // disallow declaration of variables that are not used in the code (recommended)
        'no-unused-vars': 2,
        // disallow use of variables before they are defined
        'no-use-before-define': [2, 'nofunc'],


        /**
         * Node.js and CommonJS
         * ====================
         * These rules are specific to JavaScript running on Node.js or using CommonJS in the browser.
         */

        // enforce return after a callback
        'callback-return': [2, ['callback', 'cb', 'next', 'done']],
        // disallow require() outside of the top-level module scope
        'global-require': 2,
        // enforce error handling in callbacks
        'handle-callback-err': 1,
        // disallow mixing regular variable and require declarations
        'no-mixed-requires': [1, true],
        // disallow use of new operator with the require function
        'no-new-require': 2,
        // disallow string concatenation with __dirname and __filename
        'no-path-concat': 1,
        // disallow process.exit()
        'no-process-exit': 1,
        // restrict usage of specified node modules
        'no-restricted-modules': 0,
        // disallow use of synchronous methods
        'no-sync': 1,


        /**
         * Stylistic Issues
         * ================
         * These rules are purely matters of style and are quite subjective.
         */

        // enforce spacing inside array brackets
        'array-bracket-spacing': [2, 'never'],
        // disallow or enforce spaces inside of single line blocks
        'block-spacing': [2, 'always'],
        // enforce one true brace style
        'brace-style': [2, '1tbs', {
            allowSingleLine: true
        }],
        // require camel case names
        camelcase: [2, {
            properties: 'always'
        }],
        // enforce spacing before and after comma
        'comma-spacing': [2, {
            before: false,
            after:  true
        }],
        // enforce one true comma style
        'comma-style': [2, 'last'],
        // require or disallow padding inside computed properties
        'computed-property-spacing': [2, 'never'],
        // enforce consistent naming when capturing the current execution context
        'consistent-this': 0,
        // enforce newline at the end of file, with no multiple empty lines (fixable)
        'eol-last': 2,
        // require function expressions to have a name
        'func-names': 0,
        // enforce use of function declarations or expressions
        'func-style': 0,
        // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
        'id-length': [2, {
            min: 2,
            properties: 'never',
            exceptions: ['i', 'x', 'y', 'z', '_', '$']
        }],
        // require identifiers to match the provided regular expression
        'id-match': 0,
        // specify tab or space width for your code (fixable)
        indent: [2, 4],
        // specify whether double or single quotes should be used in JSX attributes
        'jsx-quotes': 0,
        // enforce spacing between keys and values in object literal properties
        'key-spacing': [2, {
            mode: 'minimum',
            beforeColon: false,
            afterColon: true
        }],
        // enforce empty lines around comments
        'lines-around-comment': [2, {
            beforeBlockComment: true
        }],
        // disallow mixed 'LF' and 'CRLF' as linebreaks
        'linebreak-style': [2, 'unix'],
        // specify the maximum depth callbacks can be nested
        'max-nested-callbacks': [1, 3],
        // require a capital letter for constructors
        'new-cap': [2, {
            newIsCap: true,
            capIsNew: true
        }],
        // disallow the omission of parentheses when invoking a constructor with no arguments
        'new-parens': 2,
        // require or disallow an empty newline after variable declarations
        'newline-after-var': 0,
        // disallow use of the Array constructor
        'no-array-constructor': 2,
        // disallow use of the continue statement
        'no-continue': 0,
        // disallow comments inline after code
        'no-inline-comments': 1,
        // disallow if as the only statement in an else block
        'no-lonely-if': 2,
        // disallow mixed spaces and tabs for indentation (recommended)
        'no-mixed-spaces-and-tabs': 2,
        // disallow multiple empty lines
        'no-multiple-empty-lines': 2,
        // disallow nested ternary expressions
        'no-nested-ternary': 1,
        // disallow the use of the Object constructor
        'no-new-object': 2,
        // disallow use of certain syntax in code
        'no-restricted-syntax': 0,
        // disallow space between function identifier and application (fixable)
        'no-spaced-func': 2,
        // disallow the use of ternary operators
        'no-ternary': 0,
        // disallow trailing whitespace at the end of lines (fixable)
        'no-trailing-spaces': 2,
        // disallow dangling underscores in identifiers
        'no-underscore-dangle': 1,
        // disallow the use of ternary operators when a simpler alternative exists
        'no-unneeded-ternary': 2,
        // require or disallow padding inside curly braces
        'object-curly-spacing': [2, 'never'],
        // require or disallow one variable declaration per function
        'one-var': 0,
        // require assignment operator shorthand where possible or prohibit it entirely
        'operator-assignment': [2, 'always'],
        // enforce operators to be placed before or after line breaks
        'operator-linebreak': [2, 'after'],
        // enforce padding within blocks
        'padded-blocks': 0,
        // require quotes around object literal property names
        'quote-props': [2, 'as-needed'],
        // specify whether backticks, double or single quotes should be used (fixable)
        quotes: [2, 'single'],
        // Require JSDoc comment
        'require-jsdoc': 1,
        // enforce spacing before and after semicolons
        'semi-spacing': [2, {
            before: false,
            after: true
        }],
        // require or disallow use of semicolons instead of ASI (fixable)
        semi: [2, 'always'],
        // sort variables within the same declaration block
        'sort-vars': [2, {
            ignoreCase: true
        }],
        // require a space after certain keywords (fixable)
        'space-after-keywords': [2, 'always'],
        // require a space before certain keywords (fixable)
        'space-before-keywords': [2, 'always'],
        // require or disallow a space before blocks (fixable)
        'space-before-blocks': [2, 'always'],
        // require or disallow a space before function opening parenthesis (fixable)
        'space-before-function-paren': [2, 'never'],
        // require or disallow spaces inside parentheses
        'space-in-parens': [2, 'never'],
        // require spaces around operators (fixable)
        'space-infix-ops': [2, {
            int32Hint: false
        }],
        // require a space after return, throw, and case (fixable)
        'space-return-throw-case': 2,
        // require or disallow spaces before/after unary operators
        'space-unary-ops': [2, {
            words: true,
            nonwords: false
        }],
        // require or disallow a space immediately following the // or /* in a comment
        'spaced-comment': [2, 'always'],
        // require regex literals to be wrapped in parentheses
        'wrap-regex': 2,


        /**
         * Legacy
         * ======
         * The following rules are included for compatibility with JSHint and JSLint.
         * While the names of the rules may not match up with the JSHint/JSLint counterpart,
         * the functionality is the same.
         */

        // specify the maximum depth that blocks can be nested
        'max-depth': [1, 4],
        // specify the maximum length of a line in your program
        'max-len': [1, 128, 4],
        // limits the number of parameters that can be used in the function declaration.
        'max-params': [1, 4],
        // specify the maximum number of statement allowed in a function
        'max-statements': [1, 10],
        // disallow use of bitwise operators
        'no-bitwise': 1,
        // disallow use of unary operators, ++ and --
        'no-plusplus': 0

    }

};
