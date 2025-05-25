import { default as pluginJs } from '@eslint/js'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'
import tseslint from 'typescript-eslint'

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)
// const compat = new FlatCompat({
//     baseDirectory: __dirname,
//     recommendedConfig: js.configs.recommended,
//     allConfig: js.configs.all,
// })

export default [
    { files: ['src/**/*.{ts}'] },
    { ignores: ['node_modules/**', 'dist/**'] },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
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

    // { files: ['./src/**/*.{js,mjs,cjs,ts,mts}'], ignores: ['./dist/**/*.{js,mjs,cjs,ts,mts}'] },
    // {
    //     extends: fixupConfigRules(
    //         compat.extends(
    //             'eslint:recommended',
    //             'plugin:@typescript-eslint/eslint-recommended',
    //             'plugin:@typescript-eslint/recommended',
    //             'plugin:react/recommended',
    //             'plugin:react-hooks/recommended',
    //             'plugin:import/warnings',
    //             'plugin:import/errors',
    //             'plugin:react/jsx-runtime',
    //         ),
    //     ),

    //     plugins: {
    //         '@typescript-eslint': fixupPluginRules(typescriptEslint),
    //         'unused-imports': unusedImports,
    //     },

    //     languageOptions: {
    //         globals: {
    //             ...globals.jest,
    //             ...globals.node,
    //             ...globals.browser,
    //         },

    //         parser: tsParser,
    //     },

    //     settings: {
    //         react: {
    //             version: 'detect',
    //         },

    //         'import/resolver': {
    //             node: {
    //                 extensions: ['.js', '.jsx', '.ts', '.tsx'],
    //             },
    //         },
    //     },

    //     rules: {},
    // },
]
