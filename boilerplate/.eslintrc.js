module.exports = {
  root: true,
  extends: ['@react-native-community'],
  parser: '@typescript-eslint/parser',

  plugins: ['react-hooks', '@typescript-eslint'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/naming-convention': [
      'off',
      {
        leadingUnderscore: 'allow',
      },
    ],
  },
};
