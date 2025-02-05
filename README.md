# Cypress Clothing Store

## Automated Test Case: Checkout

This project automates the **checkout process** for an e-commerce clothing store using Cypress. The test case is implemented using the **Page Object Model (POM)** design pattern, and performance checks are integrated using **Lighthouse**.

---

## 📄 Test Case Document
The detailed test case document can be found here:  
[Test Case Document](https://docs.google.com/document/d/1yjukSZ9E0ZSF6bFdtNiwZVKo8FfLzUARjJzUpPPhS14/edit?usp=sharing)

---

## 🛠️ Implementation Details
- **Page Object Model (POM)**: The test case is implemented using POM for better maintainability and readability.  
- **Performance Testing**: Lighthouse is used to measure and validate the performance of the application.  
- **Reporting**: Test reports are generated using **Mochawesome** and saved in the `cypress/reports` folder.

---

## 🚀 How to Run the Tests

### Prerequisites
- Node.js
- npm

### Step 1: Clone the Repository
```bash
git clone https://github.com/your-username/cypress-clothing-store.git
cd cypress-clothing-store
```

### Step 2: Install dependencies
```bash
npm install
```

### Step 3: Install dependencies
```bash
npm install
```

### Run test manually/interactive
```bash
npm run cy:open
```

### Run test headless mode with chrome
```bash
npm run cy:run-chrome
```
