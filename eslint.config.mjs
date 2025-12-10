import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import tselint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'
import vueParser from 'vue-eslint-parser'
import globals from 'globals'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,ts,vue}'] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      }
    },
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/strongly-recommended'],
  // Parser para archivos TypeScript puros
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tselint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },
  // Parser para SFC de Vue, delegando a TS en <script setup="ts">
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tselint.parser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
    },
    plugins: { '@typescript-eslint': tselint.plugin },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  // Reglas TypeScript (solo .ts y tsx)
  {
    files: ['**/*.{ts,tsx}'],
    plugins: { '@typescript-eslint': tselint.plugin },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  eslintConfigPrettier,
]
