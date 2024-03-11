const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
  },
  "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "cypress/report/mochawesome-report",
    "overwrite": true,
    "html": true,
    "json": true,
    "timestamp": "mmddyyyy_HHMMss",
    "reportTitle": "Report",
    "cdn": true,
    "charts": true
  }
});
