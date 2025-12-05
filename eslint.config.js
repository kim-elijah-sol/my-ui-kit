import stylistic        from '@stylistic/eslint-plugin';
import arca             from 'eslint-plugin-arca';
import { defineConfig } from 'eslint/config';
import tseslint         from 'typescript-eslint';

export default defineConfig(
  {
    ignores: ['**/dist/**', '**/node_modules/**'],
  },
  tseslint.configs.recommended,
  stylistic.configs['disable-legacy'],
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: true,
    jsx: true,
  }),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@stylistic': stylistic,
      arca,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',

      '@stylistic/indent': ['error', 2],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/no-multi-spaces': 'off',

      'arca/import-align': ['error', { collapseExtraSpaces: true }],
    },
  },
);
