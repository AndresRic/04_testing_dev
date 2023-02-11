const { defineConfig } = require('cypress');

module.exports = defineConfig({
	reporter: 'cypress-mochawesome-reporter',
	reporterOptions: {
		charts: true,
		reportPageTitle: 'custom-title',
		embeddedScreenshots: true,
		inlineAssets: true,
		saveAllAttempts: false,
	},

	e2e: {
		setupNodeEvents(on, config) {
			require('cypress-mochawesome-reporter/plugin')(on);
			// implement node event listeners here
			on('before:browser:launch', (browser = {}, launchOptions) => {
				// `args` is an array of all the arguments that will
				// be passed to browsers when it launches
				console.log(launchOptions.args);

				if (browser.name === 'chrome') {
					launchOptions.args.push('--auto-open-devtools-for-tabs'); // auto open devtools
					// launchOptions.args.push('--incognito'); //open browser in incognito mode
				}

				return launchOptions;
			});
		},

		experimentalStudio: true, //default = false
		chromeWebSecurity: false, //default = true
		defaultCommandTimeout: 4000, //default = 4000
		requestTimeout: 20000, //defailt = 5000
		responseTimeout: 30000, //default = 30000
		pageLoadTimeout: 60000, //default = 60000
		scrollBehavior: 'top', //default = top
		viewportWidth: 1366,
		viewportHeight: 768,
	},
});
