const element = require("../locator.json")

class NewUserPage {
    get nama() {
        return $(element.addNewUserPage.nama)
    }

    get email(){
        return $(element.addNewUserPage.email)
    }

    get password(){
        return $(element.addNewUserPage.password)
    }

    get btnSave() {
        return $(element.addNewUserPage.btnSave)
    }

    async clickSave() {
        await this.btnSave.click()
    }

    async addNewUser(user_name, user_email, user_password) {
        await this.nama.setValue(user_name)
        await this.email.setValue(user_email)
        await this.password.setValue(user_password)
        await this.btnSave.click()
    }

    async emailPasswordOnly(user_email2, user_password2) {
        await this.email.setValue(user_email2)
        await this.password.setValue(user_password2)
        await this.btnSave.click()
    }

    async alertEmptyField() {
        return $(element.addNewUserPage.alertEmptyField)
    }

    async success() {
        return $('li[class=\'chakra-toast\'] div[class=\'chakra-alert__desc css-zycdy9\']')
    }

    open() {
        return super.open('/categories/create');
    }
}

module.exports = new NewUserPage();