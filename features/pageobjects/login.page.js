const { $ } = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {
    get inputEmail() {
        return $('#email');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnSubmit() {
        return $('button[type="submit"]');
    }

    async alertMessage() {
        return $('div[role=\'alert\']');
    }

    async login(email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async loginSuccess() {
        await this.inputEmail.setValue("sofiaa53@gmail.com");
        await this.inputPassword.setValue("Bandung5300");
        await this.btnSubmit.click();
    }

    open() {
        return super.open('/');
    }
}

module.exports = new LoginPage();
