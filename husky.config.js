module.exports = {
    hooks: {
      'pre-commit': 'lint-staged && pnpm run build && pnpm run lint',
      'pre-push': 'pnpm run lint'
    }
  };
  