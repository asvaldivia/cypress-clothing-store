class CartPage{
    proceedToCheckout(){
        cy.get('#do_action a.btn.btn-default.check_out').click();
    }

    goToRegisterLogin(){
        cy.get('#checkoutModal > div > div > div.modal-body > p:nth-child(2) > a > u').click();
    }
}

export default new CartPage();