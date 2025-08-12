const { test, expect } = require('@playwright/test')
const { CalculatorPage } = require('../pages/calculatorPage');

test('Multiply two Numbers', async ({ page }) => {
	const calculator = new CalculatorPage(page);
	await calculator.navigateToCalculator();
	await calculator.pressButton('7');
	await calculator.pressButton('*');
	await calculator.pressButton('8');
	await calculator.pressButton('=');
	const displayValue = await calculator.getDisplayValue();
	console.log(displayValue);
	expect(displayValue).toBe('56');
})