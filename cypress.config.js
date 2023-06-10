const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://chitragupta-ui-git-staging-chitragupta.vercel.app',
    defaultCommandTimeout: 16000,
  },
});
