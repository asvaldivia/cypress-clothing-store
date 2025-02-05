import HomePage from '../../pages/HomePage.js';
import ProductsPage from '../../pages/ProductsPage.js';
import CartPage from '../../pages/CartPage.js';
import LoginPage from '../../pages/LoginPage.js';
import SignupPage from '../../pages/SignupPage.js';
import CheckoutPage from '../../pages/CheckoutPage.js';
import PaymentInformationPage from '../../pages/PaymentInformationPage.js';

// Screen sizes to test
const screenSizes = ['macbook-13', 'iphone-x'];

// Loop through the screen sizes
screenSizes.forEach((screenSize) => {
    describe(`Clothing Store Checkout on ${screenSize} screen`, () => {
        
        let testData;
        before(() => {
            // generating fake data
            cy.generateFakeData().then((data) => {
                testData = data;
            });
            cy.viewport(screenSize);
        })
    
        beforeEach(() => {
            cy.visit('https://www.automationexercise.com/');
        })
    
        it(`should add a product to the cart and proceed to checkout on ${screenSize} screen`, () => {
            // Go to the products section
            HomePage.goToProducts();
            // Select the third product
            ProductsPage.selectProduct();
            // Enter quantity
            ProductsPage.setQuantity(Math.floor(Math.random() * 20) + 1);
            // Add to cart
            ProductsPage.addToCart();
    
            // Go to cart
            HomePage.goToCart();
            // Proceed/continue to checkout
            CartPage.proceedToCheckout();
            // Register Login modal
            CartPage.goToRegisterLogin();
    
            // Fill the registration form
            LoginPage.fillRegistrationForm(testData);
            LoginPage.sendSignupForm();
            //  Fill signup account information
            SignupPage.fillRegistrationForm(testData);
            SignupPage.createAccount();
            SignupPage.continueNavigating();
            
            // Go cart again to proceed to checkout
            HomePage.goToCart();
            // Proceed to checkout
            CartPage.proceedToCheckout();
            CheckoutPage.placeOrder();
            // Payment information
            PaymentInformationPage.fillCardInformation(testData);
            PaymentInformationPage.confirmPayment();
            // Order confirmation page
            PaymentInformationPage.continueFromOrderPlaced();
    
            // Logout
            HomePage.logout();
            HomePage.getLoginButton().should('be.visible');

        })
    })
        
})
