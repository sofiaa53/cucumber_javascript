const element = require("../locator.json")

class CategoryPage {
    async btnAdd() {
        return $(element.categoryPage.btnAdd)
    }
}

module.exports = new CategoryPage();