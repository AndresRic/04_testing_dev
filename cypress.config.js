const { defineConfig } = require('cypress');

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		experimentalStudio: true, //default = false
		chromeWebSecurity: false, //default = true
		defaultCommandTimeout: 40000, //default = 4000
		requestTimeout: 5000, //defailt = 5000
		responseTimeout: 30000, //default = 30000
		pageLoadTimeout: 60000, //default = 60000
		scrollBehavior: 'top', //default = top
	},
});
