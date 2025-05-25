import eslint from '@eslint/js'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'
import unusedImports from 'eslint-plugin-unused-imports'
import tseslint from 'typescript-eslint'
import eslintReact from '@eslint-react/eslint-plugin'

export default tseslint.config([
    { files: ['src/**/*.{ts}'] },
    { ignores: ['node_modules/**', 'dist/**', 'coverage/**', 'eslint.config.mjs'] },
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    tseslint.configs.eslintRecommended,
    eslintPluginPrettier,
    {
        extends: [eslintReact.configs['recommended-typescript'], eslintReact.configs.x, eslintReact.configs.dom],
        // Configure language/parsing options
        languageOptions: {
            // Use TypeScript ESLint parser for TypeScript files
            parser: tseslint.parser,
            parserOptions: {
                // Enable project service for better TypeScript integration
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
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
        files: ['src/**/*.ts', 'src/**/*.tsx'],
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
