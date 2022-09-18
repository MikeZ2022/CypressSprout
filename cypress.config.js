const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "8dvm96",
  projectId: "dcws3b",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
