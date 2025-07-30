
// prompt I used  node ai/generateTest.js "create several similar tests based on the template"  

const { test, expect } = require('@playwright/test')
const { CalculatorPage } = require('../pages/calculatorPage')

test('Add two Numbers', async ({ page }) => {
	const calculator = new CalculatorPage(page)
	await calculator.navigateToCalculator()
	await calculator.pressButton('7')
	await calculator.pressButton('+')
	await calculator.pressButton('5')
	await calculator.pressButton('=')
	const displayValue = await calculator.getDisplayValue()
	console.log(displayValue)
	expect(displayValue).toBe('12')
})

test('Subtract two Numbers', async ({ page }) => {
	const calculator = new CalculatorPage(page)
	await calculator.navigateToCalculator()
	await calculator.pressButton('9')
	await calculator.pressButton('-')
	await calculator.pressButton('4')
	await calculator.pressButton('=')
	const displayValue = await calculator.getDisplayValue()
	console.log(displayValue)
	expect(displayValue).toBe('5')
})

test('Multiply two Numbers', async ({ page }) => {
	const calculator = new CalculatorPage(page)
	await calculator.navigateToCalculator()
	await calculator.pressButton('8')
	await calculator.pressButton('*')
	await calculator.pressButton('3')
	await calculator.pressButton('=')
	const displayValue = await calculator.getDisplayValue()
	console.log(displayValue)
	expect(displayValue).toBe('24')
})

test('Divide two Numbers', async ({ page }) => {
	const calculator = new CalculatorPage(page)
	await calculator.navigateToCalculator()
	await calculator.pressButton('6')
	await calculator.pressButton('/')
	await calculator.pressButton('2')
	await calculator.pressButton('=')
	const displayValue = await calculator.getDisplayValue()
	console.log(displayValue)
	expect(displayValue).toBe('3')
})

test('Add three Numbers', async ({ page }) => {
	const calculator = new CalculatorPage(page)
	await calculator.navigateToCalculator()
	await calculator.pressButton('2')
	await calculator.pressButton('+')
	await calculator.pressButton('3')
	await calculator.pressButton('+')
	await calculator.pressButton('4')
	await calculator.pressButton('=')
	const displayValue = await calculator.getDisplayValue()
	console.log(displayValue)
	expect(displayValue).toBe('9')
})