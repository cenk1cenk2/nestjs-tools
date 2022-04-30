/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [ '@cenk1cenk2/eslint-config/typescript-dynamic', '@cenk1cenk2/eslint-config/import-strict' ],
  overrides: [ ...require('@cenk1cenk2/eslint-config/utils').generateImportGroupsWithOverride({ tsconfigDir: __dirname, tsconfig: 'tsconfig.json' }) ]
}
