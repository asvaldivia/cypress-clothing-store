class LoginPage {
    fillRegistrationForm(testData) {
        cy.get('#form > div > div > div:nth-child(3) > div > form > input[type=text]:nth-child(2)').clear().type(testData.fullname);
        cy.get('#form > div > div > div:nth-child(3) > div > form > input[type=email]:nth-child(3)').clear().type(testData.email);
    }

    sendSignupForm() {
        cy.get('#form > div > div > div:nth-child(3) > div > form > button').click();
    }
}

export default new LoginPage();