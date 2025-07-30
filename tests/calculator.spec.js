const { test, expect } = require('@playwright/test')
const { CalculatorPage } = require('../pages/calculatorPage');


test.describe('Calculator', () =>{
	test.slow();
test('Add two Numbers', async ({ page }) => {
	const calculator = new CalculatorPage(page);
	await calculator.navigateToCalculator();
	await calculator.pressButton('1');
	await calculator.pressButton('+');
	await calculator.pressButton('2');
	await calculator.pressButton('=');
	const displayValue = await calculator.getDisplayValue();
	console.log(displayValue);
	expect(displayValue).toBe('3');
	
});
test('Subtract two Numbers', async ({ page }) => {
	const calculator = new CalculatorPage(page);
	await calculator.navigateToCalculator();
	await calculator.pressButton('9');
	await calculator.pressButton('-');
	await calculator.pressButton('8');
	await calculator.pressButton('=');
	const displayValue = await calculator.getDisplayValue();
	console.log(displayValue);
	expect(displayValue).toBe('1');
	
});

test('Multiply two Numbers', async ({ page }) => {
	const calculator = new CalculatorPage(page);
	await calculator.navigateToCalculator();
	await calculator.pressButton('1');
	await calculator.pressButton('X');
	await calculator.pressButton('2');
	await calculator.pressButton('=');
	const displayValue = await calculator.getDisplayValue();
	console.log(displayValue);
	expect(displayValue).toBe('2');
	
});


test('Divide two Numbers', async ({ page }) => {
	const calculator = new CalculatorPage(page);
	await calculator.navigateToCalculator();
	await calculator.pressButton('6');
	await calculator.pressButton('/');
	await calculator.pressButton('2');
	await calculator.pressButton('=');
	const displayValue = await calculator.getDisplayValue();
	console.log(displayValue);
	expect(displayValue).toBe('3');
	
});


test('Decimal output', async ({ page }) => {
	const calculator = new CalculatorPage(page);
	await calculator.navigateToCalculator();
	await calculator.pressButton('1');
	await calculator.pressButton('/');
	await calculator.pressButton('2');
	await calculator.pressButton('=');
	const displayValue = await calculator.getDisplayValue();
	console.log(displayValue);
	expect(displayValue).toBe('0.5');
	
});

test('chaining operations test', async ({ page }) => {
	const calculator = new CalculatorPage(page);
	await calculator.navigateToCalculator();
	await calculator.pressButton('1');
	await calculator.pressButton('/');
	await calculator.pressButton('2');
	await calculator.pressButton('X');
	await calculator.pressButton('2');
	await calculator.pressButton('=');
	const displayValue = await calculator.getDisplayValue();
	console.log(displayValue);
	expect(displayValue).toBe('1');
	
});

});