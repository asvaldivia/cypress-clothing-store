class CheckoutPage {
    placeOrder() {
        cy.get('#cart_items > div > div:nth-child(7) > a').click();
    }
}

export default new CheckoutPage();