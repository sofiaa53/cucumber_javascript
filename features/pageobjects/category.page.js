const element = require("../locator.json")

class CategoryPage {
    get btnAdd() {
        return $('.chakra-button.css-1piskbq')
    }

    async clickbtnAdd() {
        await this.btnAdd.click()
    }

    open() {
        return super.open('/categories');
    }
}

module.exports = new CategoryPage();