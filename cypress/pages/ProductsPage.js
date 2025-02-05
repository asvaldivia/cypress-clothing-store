class ProductsPage {
    selectProduct() {
        cy.get('body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(5) > div > div.choose > ul > li > a').click();
    }

    setQuantity(quantity) {
        cy.get('#quantity').clear().type(quantity);
    }

    addToCart() {
        cy.get(':nth-child(5) > .btn').click();
        // Continue shopping/close modal
        cy.get('#cartModal > div > div > div.modal-footer > button').click();
    }
}

export default new ProductsPage();