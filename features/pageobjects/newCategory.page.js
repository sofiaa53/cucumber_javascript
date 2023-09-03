const element = require("../locator.json")

class NewCategoryPage {
    get nama() {
        return $('#nama')
    }

    get deskripsi(){
        return $('#deskripsi')
    }

    get btnSave() {
        return $('button[class=\'chakra-button css-l5lnz6\']')
    }

    async alertEmptyField() {
        return $('div[role=\'alert\']')
    }

    async success() {
        return $('li[class=\'chakra-toast\'] div[class=\'chakra-alert__desc css-zycdy9\']')
    }

    async addNewCategory(cat_name, cat_desc) {
        await this.nama.setValue(cat_name)
        await this.deskripsi.setValue(cat_desc)
        await this.btnSave.click()
    }

    async addCategoryOnly(cat_desc2) {
        await this.deskripsi.setValue(cat_desc2)
        await this.btnSave.click()
    }

    open() {
        return super.open('/categories/create');
    }
}

module.exports = new NewCategoryPage();