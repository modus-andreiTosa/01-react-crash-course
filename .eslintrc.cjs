module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ],
  globals: {
    JSX: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      tsx: true,
      ts: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    'react/prop-types': 'off', // Disable prop-types rule if not needed
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
  },
  settings: {
    react: {
      version: 'detect',
      pragma: 'React',
    },
  },
};
