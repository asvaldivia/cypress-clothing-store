class SignupPage {
    fillRegistrationForm(testData) {
        cy.get('#id_gender1').check();
        cy.get('#password').type(testData.password);
        cy.get('#days').select('2');
        cy.get('#months').select('8');
        cy.get('#years').select('1996');
        cy.get('#first_name').clear().type(testData.firstName);
        cy.get('#last_name').clear().type(testData.lastName);
        cy.get('#company').clear().type(testData.company);
        cy.get('#address1').clear().type(testData.address1);
        cy.get('#address2').clear().type(testData.address2);
        cy.get('#country').select(testData.country);
        cy.get('#state').clear().type(testData.state);
        cy.get('#city').clear().type(testData.city);
        cy.get('#zipcode').clear().type(testData.zipcode);
        cy.get('#mobile_number').clear().type(testData.phone);
    }

    createAccount(){
        cy.get('#form > div > div > div > div.login-form > form > button').click();
    }

    continueNavigating(){
        cy.get('#form > div > div > div > div > a').click();
    }
}

export default new SignupPage();