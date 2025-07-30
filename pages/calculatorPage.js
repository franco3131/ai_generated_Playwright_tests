const { BasePage } = require('./basePage');

class CalculatorPage extends BasePage {
	constructor(page){
		super(page);
	}

	async navigateToCalculator(){
		await this.page.goto('https://rawcdn.githack.com/franco3131/Wood-Calculator-Javascript/a1175acf8a268e506e2fd6b39dbb0a6156b6c29e/Calculator/HTML/calculator.html');
	}

	async pressButton(text) {
		const button = await this.page.locator('div.col-xs-3>button:has-text("'+text+'")');
		await button.click();
	}

	async getDisplayValue() {
		return await this.page.locator("div.well").textContent();
	}

}
module.exports = { CalculatorPage };
