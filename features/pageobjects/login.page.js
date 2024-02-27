const { $ } = require('@wdio/globals')


class LoginPage {
    /**
     * selectors
     */
    elements = {
    inputUsername: () => $('#user-name'),
    inputPassword: () => $('#password'),
    btnSubmit: () => $('input#login-button'),
    alertErrorLogin: ()  => $('.error-message-container')

    }


    /**
     * Login to the application with the provided username and password.
     * 
     * @param {string} username - The username to use for login.
     * @param {string} password - The password to use for login.
     * @returns {Promise<void>} - A Promise that resolves when the login process is complete.
     */
    async login (username, password) {
        await this.elements.inputUsername().setValue(username);
        await this.elements.inputPassword().setValue(password);
        await this.elements.btnSubmit().click();
    }

}

module.exports = new LoginPage();
