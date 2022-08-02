const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "8dvm96",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
