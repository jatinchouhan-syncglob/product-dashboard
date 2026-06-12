module.exports = {
  root: true,
  extends: [
    '@react-native',
  ],
  plugins: ['import'],
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'external',
          'internal',
          ['parent', 'sibling'],
        ],
        pathGroups: [
          {
            pattern: '@app/**',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'react-native'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
