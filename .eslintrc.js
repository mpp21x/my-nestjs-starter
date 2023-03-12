module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        'selector': 'interface',
        'format': ['PascalCase'],
        'prefix': ['I'],
      },
      {
        'selector': 'typeAlias',
        'format': ['PascalCase'],
        'prefix': ['T']
      },
      {
        'selector': 'enum',
        'format': ['PascalCase'],
        'prefix': ['E']
      },
      {
        'selector': 'variable',
        'types': ['boolean'],
        'format': ['PascalCase'],
        'prefix': ['is', 'should', 'has', 'can', 'did', 'will']
      },
      {
        "selector": "variable",
        "format": ["camelCase", "PascalCase"]
      },
      {
        "selector": "classProperty",
        "modifiers": ["private"],
        "format": ["camelCase"],
        "leadingUnderscore": "require"
      }
    ],
    /**
     * https://typescript-eslint.io/rules/no-explicit-any/
     * Encourage the use of "unknown" type instead of "any" type, but not necessarily.
     */
    '@typescript-eslint/no-explicit-any': 'warn',
    /**
     * https://typescript-eslint.io/rules/explicit-function-return-type/
     * Functions in TypeScript often don't need to be given an explicit return type annotation. Leaving off the return type is less code to read or write and allows the compiler to infer it from the contents of the function.
     *
     * However, explicit return types do make it visually more clear what type is returned by a function. They can also speed up TypeScript type checking performance in large codebases with many large functions.
     */
    '@typescript-eslint/explicit-function-return-type': 'warn',
    /**
     * https://typescript-eslint.io/rules/explicit-module-boundary-types/
     * Same as '@typescript-eslint/explicit-function-return-type', the only difference is that this rule applies to functions that are exported from a module.
     */
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-unused-vars': 'warn',
    'indent': [
      'off',
      'tab'
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'warn',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'prettier/prettier': [
      'error',
      {
        'endOfLine': 'auto',
      }
    ]
  },
};
