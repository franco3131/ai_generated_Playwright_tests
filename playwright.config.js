const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
	use: {
		channel: 'chrome',
		headless: false,
	},

projects: [
{
	name: 'chrome',
	use: {
		channel: 'chrome',
	},

},


],

});
