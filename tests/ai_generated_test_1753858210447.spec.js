const { test, expect } = require('@playwright/test')
const { CalculatorPage } = require('../pages/calculatorPage');

test('Add two Numbers', async ({ page }) => {
	const calculator = new CalculatorPage(page);
	await calculator.navigateToCalculator();
	await calculator.pressButton('1');
	await calculator.pressButton('6');
	await calculator.pressButton('+');
	await calculator.pressButton('2');
	await calculator.pressButton('3');
	await calculator.pressButton('=');
	const displayValue = await calculator.getDisplayValue();
	console.log(displayValue);
	expect(displayValue).toBe('39');
})