//ai generated edge cases

const { test, expect } = require('@playwright/test')
const { CalculatorPage } = require('../pages/calculatorPage');

test('Edge Cases for Division', async ({ page }) => {
	const calculator = new CalculatorPage(page);

	await calculator.navigateToCalculator();
	await calculator.pressButton('0');
	await calculator.pressButton('/');
	await calculator.pressButton('5');
	await calculator.pressButton('=');
	let displayValue = await calculator.getDisplayValue();
	expect(displayValue).toBe('0');

	await calculator.navigateToCalculator();
	await calculator.pressButton('5');
	await calculator.pressButton('/');
	await calculator.pressButton('0');
	await calculator.pressButton('=');
	displayValue = await calculator.getDisplayValue();
	expect(displayValue === 'Infinity' || displayValue === 'Error' || displayValue === 'Cannot divide by zero').toBeTruthy();

	await calculator.navigateToCalculator();
	await calculator.pressButton('-');
	await calculator.pressButton('8');
	await calculator.pressButton('/');
	await calculator.pressButton('2');
	await calculator.pressButton('=');
	displayValue = await calculator.getDisplayValue();
	expect(displayValue).toBe('-4');

	await calculator.navigateToCalculator();
	await calculator.pressButton('9');
	await calculator.pressButton('/');
	await calculator.pressButton('3');
	await calculator.pressButton('/');
	await calculator.pressButton('3');
	await calculator.pressButton('=');
	displayValue = await calculator.getDisplayValue();
	expect(displayValue).toBe('1');

	await calculator.navigateToCalculator();
	await calculator.pressButton('1');
	await calculator.pressButton('0');
	await calculator.pressButton('0');
	await calculator.pressButton('/');
	await calculator.pressButton('3');
	await calculator.pressButton('=');
	displayValue = await calculator.getDisplayValue();
	expect(displayValue).toBe('33.333333333333336');
})