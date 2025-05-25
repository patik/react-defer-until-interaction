// @ts-check

import eslint from '@eslint/js'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'
import unusedImports from 'eslint-plugin-unused-imports'
import tseslint from 'typescript-eslint'

export default tseslint.config([
    { files: ['src/**/*.{ts}'] },
    { ignores: ['node_modules/**', 'dist/**'] },
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    tseslint.configs.eslintRecommended,
    eslintPluginPrettier,
    {
        rules: {
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    caughtErrors: 'none',
                },
            ],
        },
    },
    {
        plugins: {
            'unused-imports': unusedImports,
        },
    },
    {
        files: ['**/*.ts', '**/*.tsx'],
        rules: {
            '@typescript-eslint/no-unused-vars': 'off',
            'unused-imports/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                },
            ],
            'unused-imports/no-unused-imports': 'error',
        },
    },
])
