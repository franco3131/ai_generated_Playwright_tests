class BasePage{
	constructor(page){
		this.page=page;
	}
	async click(locator){
		await this.page.locator(locator).click()
	};
	async type(locator,value){
		await this.page.locator(locator).fill(value);

	}
	async getText(locator){
		return await this.page.locator(locator).textContent();
	}
	async isVisible(locator){
		return await this.page.locator(locator).isVisible();
	}
	async waitFor(locator){
		await this.page.locator(locator).waitFor();
	}

}
module.exports = { BasePage };

