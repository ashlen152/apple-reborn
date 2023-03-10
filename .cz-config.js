const custom = require('@digitalroute/cz-conventional-changelog-for-jira/configurable')

module.exports = custom({
  types: {
    feat: {
      description: 'â¨ A new feature',
      title: 'Features',
      emoji: 'â¨'
    },
    fix: {
      description: 'đ A bug fix',
      title: 'Bug Fixes',
      emoji: 'đ'
    },
    docs: {
      description: 'đ Documentation only changes',
      title: 'Documentation',
      emoji: 'đ'
    },
    style: {
      description:
        'đ¨ Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
      title: 'Styles',
      emoji: 'đ'
    },
    refactor: {
      description:
        'đĻ A code change that neither fixes a bug nor adds a feature',
      title: 'Code Refactoring',
      emoji: 'đĻ'
    },
    perf: {
      description: 'đ A code change that improves performance',
      title: 'Performance Improvements',
      emoji: 'đ'
    },
    test: {
      description: 'đ¨ Adding missing tests or correcting existing tests',
      title: 'Tests',
      emoji: 'đ¨'
    },
    build: {
      description:
        'đ  Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
      title: 'Builds',
      emoji: 'đ '
    },
    ci: {
      description:
        'âī¸ Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
      title: 'Continuous Integrations',
      emoji: 'âī¸'
    },
    chore: {
      description: "đ§ Other changes that don't modify src or test files",
      title: 'Chores',
      emoji: 'âģī¸'
    },
    revert: {
      description: 'ī¸âŠī¸ Reverts a previous commit',
      title: 'Reverts',
      emoji: 'đ'
    }
  },
  jiraLocation: 'pre-description',
  jiraOptional: true
})
