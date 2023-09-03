const element = require("../locator.json")

class UserPage {
    get btnAdd() {
        return $(element.userPage.btnAdd)
    }

    async clickbtnAdd() {
        await this.btnAdd.click()
    }

    open() {
        return super.open('/categories');
    }
}

module.exports = new UserPage();