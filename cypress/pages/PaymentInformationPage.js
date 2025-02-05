class PaymentInformationPage {
    fillCardInformation (testData) {
        cy.get('#payment-form > div:nth-child(2) > div > input').clear().type(testData.fullname);
        cy.get('#payment-form > div:nth-child(3) > div > input').clear().type(testData.cardNumber);
        cy.get('#payment-form > div:nth-child(4) > div.col-sm-4.form-group.cvc > input').clear().type(testData.cardCVC);
        cy.get('#payment-form > div:nth-child(4) > div:nth-child(2) > input').clear().type(testData.cardExpMonth);
        cy.get('#payment-form > div:nth-child(4) > div:nth-child(3) > input').clear().type(testData.cardExpYear);
    }

    confirmPayment () {
        cy.get('#submit').click();
    }

    continueFromOrderPlaced () {
        cy.get('#form > div > div > div > div > a').click();
    }
}

export default new PaymentInformationPage();