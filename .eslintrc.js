module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2020': true,
    'node': true,
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 12,
  },
  'rules': {
    curly: 'error',
    indent: ['error', 2],
    'semi': ['error', 'always'],
    'no-trailing-spaces': 'error',
    'no-multi-spaces': 'error',
    'space-infix-ops': 'error',
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'always-multiline'],
    'block-spacing': 'error',
    'quotes': [2, 'single', { 'allowTemplateLiterals': true }],
  },
};
