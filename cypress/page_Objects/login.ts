class LoginPage {
    private readonly usernameField = 'input[data-test="username"]';
    private readonly passwordField = 'input[data-test="password"]';
    private readonly loginButton = 'input[data-test="login-button"]';
    public readonly errorMessageContainer = 'div[class="error-message-container error"]';
    public readonly closeErrorButton = 'button[data-test="error-button"]';

    public login(name: string = '', pass: string = '') {
        if(name) {
            cy.get(this.usernameField).type(name);
        }
        if(pass) {
            cy.get(this.passwordField).type(pass);
        }
        cy.get(this.loginButton).click();

    };
};

export default new LoginPage();