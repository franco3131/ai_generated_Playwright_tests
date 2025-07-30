require('dotenv').config();
const fs = require('fs');
const { OpenAI } = require('openai');

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
	//process.env.OPENAI_API_KEY,
	 });

async function generateTest(promptText) {
	const response = await openai.chat.completions.create({

		model: 'gpt-4.1',
		messages: [
				{
					role: 'system',
					content: 'you are a playwright test generator',
				},
				{
					role: 'user',
					content: promptText,
				},



		],
		temperature: 0.3

	});
	const testCode = response.choices[0].message.content;
	const outputFile = `tests/ai_generated_test_${Date.now()}.spec.js`;
	fs.writeFileSync(outputFile,testCode);
	// console.log('Test generator' ${outputFile});
}
const prompt = `Create a playwright test with the following template: 
	const { test, expect } = require('@playwright/test')
	const { CalculatorPage } = require('../pages/calculatorPage');

	test('Divide two Numbers', async ({ page }) => {
		const calculator = new CalculatorPage(page);
		await calculator.navigateToCalculator();
		await calculator.pressButton('6');
		await calculator.pressButton('/');
		await calculator.pressButton('2');
		await calculator.pressButton('=');
		const displayValue = await calculator.getDisplayValue();
		console.log(displayValue);
		expect(displayValue).toBe('3');	 })

	 do not include any comments and dont quote anything .
	 Create a test with the following condition:`+  process.argv.slice(2).join(" ");
if(!prompt){
	console.log("provide a prompt.");
	process.exit(1);
}
generateTest(prompt);
