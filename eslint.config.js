import stylistic from '@stylistic/eslint-plugin';
import arca      from 'eslint-plugin-arca';

export default [
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: true,
    jsx: true,
  }),
  {
    plugins: {
      '@stylistic': stylistic,
      arca,
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/no-multi-spaces': 'off',

      'arca/import-align': ['error', { collapseExtraSpaces: true }],
    },
  },
];
