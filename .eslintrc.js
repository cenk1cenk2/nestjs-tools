module.exports = {
  extends: [ '@cenk1cenk2/eslint-config', '@cenk1cenk2/eslint-config/typescript' ],
  rules: {
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '@cenk1cenk2/**',
            group: 'parent'
          },
          {
            pattern: '@webundsoehne/**',
            group: 'parent'
          }
        ],
        pathGroupsExcludedImportTypes: [ 'builtin' ],
        groups: [
          [ 'builtin', 'external' ],
          [ 'index', 'parent', 'sibling' ]
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ]
  }
}
