class HomePage {

    visit() {
        cy.visit('https://www.automationexercise.com/');
    }

    goToProducts() {
        cy.get('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(2) > a').click();
    }

    goToCart() {
        cy.get('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(3) > a').click();
    }

    logout() {
        cy.get('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(4) > a').click();
    }

    getLoginButton() {
        return cy.get('[data-qa="login-button"]');
    }
  
}

export default new HomePage();