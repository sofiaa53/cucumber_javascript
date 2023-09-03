const element = require("../locator.json")

class DashboardPage {
    async header() {
        return $(element.dashboardPage.header)
    }

    get btnCategory(){
        return $(element.dashboardPage.btnCategory)
    }

    get btnProduct() {
        return $(element.dashboardPage.btnProduct)
    }

    get btnProfile() {
        return $(element.dashboardPage.btnProfile)
    }

    get btnLogout() {
        return $(element.dashboardPage.btnLogout)
    }

    get btnUser() {
        return $(element.dashboardPage.btnUser)
    }

    async clickbtnCategory(){
        await this.btnCategory.click()
    }

    async clickbtnUser(){
        await this.btnUser.click()
    }

    async clickbtnProduct(){
        await this.btnProduct.click()
    }

    async clickbtnProfile(){
        await this.btnProfile.click()
    }

    async clickbtnLogout(){
        await this.btnLogout.click()
    }

    open() {
        return super.open('/dashboard');
    }
}

module.exports = new DashboardPage();