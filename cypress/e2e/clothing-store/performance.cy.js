import HomePage from '../../pages/HomePage.js';

import PerformanceThreshold from '../../support/PerformanceThreshold.js';
const thresholds = PerformanceThreshold.getThresholds();

describe('Clothing Store Performance', () => {

    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/');
    });
    
    it('should meet performance thresholds for HomePage', () => {
        cy.lighthouse(thresholds);
    });

    it('should meet performance thresholds for ProductsPage', () => {
        HomePage.goToProducts();
        cy.lighthouse(thresholds);
    });

    it('should meet performance thresholds for CartPage', () => {
        HomePage.goToCart
        cy.lighthouse(thresholds);
    });
})