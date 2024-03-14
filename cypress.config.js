const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    retries: {
      runMode: 2,
      openMode: 1,
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
