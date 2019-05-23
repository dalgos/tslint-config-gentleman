const path = require('path')

module.exports = {
  rulesDirectory: [
    path.join(path.dirname(require.resolve('tslint-consistent-codestyle')), './'),
    path.join(path.dirname(require.resolve('tslint-eslint-rules')), 'dist/rules'),
    path.join(path.dirname(require.resolve('tslint-microsoft-contrib')), './'),
  ],
  rules: {
    'class-name': true,
    'comment-format': [true, 'check-space'],
    'curly': [true, 'ignore-same-line'],
    'import-name': false,
    'indent': [true, 'space', 2],
    'interface-name': [true, 'never-prefix'],
    'interface-over-type-literal': true,
    'jsdoc-format': true,
    'jsx-alignment': true,
    'jsx-curly-spacing': [true, 'never'],
    'jsx-equals-spacing': [true, 'never'],
    'jsx-key': [true, 'always'],
    'jsx-no-bind': true,
    'jsx-no-lambda': true,
    'jsx-no-multiline-js': false,
    'jsx-no-string-ref': [true, 'never'],
    'jsx-self-close': [true, 'always'],
    'jsx-space-before-trailing-slash': [true, 'always'],
    'jsx-wrap-multiline': [true, 'always'],
    'max-line-length':false,
    'member-access': false,
    'member-ordering':false,
    'linebreak-style': [true, 'LF'],
    'no-console': {
      'options': [
        'debug',
        'info',
        'time',
        'timeEnd',
        'trace'
      ]
    },
    'no-empty':false,
    'no-duplicate-imports': false,
    'no-irregular-whitespace': true,
    'no-implicit-dependencies': false,
    'no-inferrable-types': true,
    'no-internal-module': true,
    'no-regex-spaces': true,
    'no-shadowed-variable':false,
    'no-sparse-arrays': true,
    'no-submodule-imports': false,
    'no-trailing-whitespace':true,
    'no-unused-expression':false,
    'object-literal-shorthand': true,
    'ordered-imports':false,
    'quotemark':[true, 'single', 'jsx-double'],
    'semicolon': [true, 'never', 'ignore-interfaces'],
    'ter-arrow-parens': false,
    'ter-indent': [true, 2, {
      'SwitchCase': 1
    }],
    'trailing-comma':false,
    'typedef-whitespace': [
      true,
      {
          'call-signature': 'nospace',
          'index-signature': 'nospace',
          'parameter': 'nospace',
          'property-declaration': 'nospace',
          'variable-declaration': 'nospace'
      },
      {
          'call-signature': 'onespace',
          'index-signature': 'onespace',
          'parameter': 'onespace',
          'property-declaration': 'onespace',
          'variable-declaration': 'onespace'
      }
    ],
    'valid-typeof': true,
    'whitespace': [true,
      'check-branch',
      'check-decl',
      'check-operator',
      'check-module',
      'check-separator',
      'check-type',
      'check-postbrace'
    ]
  },
}