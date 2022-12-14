const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "8dvm96",

  e2e: {
    baseUrl:'https://app.getsprout.co/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
