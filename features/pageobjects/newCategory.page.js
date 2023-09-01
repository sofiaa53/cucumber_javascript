const element = require("../locator.json")

class NewCategoryPage {
    async btnAdd() {
        return $(element.categoryPage.btnAdd)
    }

    async nama() {
        return $(element.addNewCategoryPage.nama)
    }

    async deskripsi(){
        return $(element.addNewCategoryPage.deskripsi)
    }

    async btnSave() {
        return $(element.addNewCategoryPage.btnSave)
    }

    async alertEmptyField() {
        return $(element.addNewCategoryPage.alertEmptyField)
    }
}

module.exports = new NewCategoryPage();