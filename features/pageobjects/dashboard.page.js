const element = require("../locator.json")

class DashboardPage {
    async header() {
        return $(element.dashboardPage.header)
    }

    async btnCategory(){
        return $(element.dashboardPage.btnCategory)
    }

    async btnProduct() {
        return $(element.dashboardPage.btnProduct)
    }

    async btnUser() {
        return $(element.dashboardPage.btnUser)
    }
}

module.exports = new DashboardPage();