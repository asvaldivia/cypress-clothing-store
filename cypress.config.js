const { defineConfig } = require("cypress");
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse(),
      });
    },
  },
});
