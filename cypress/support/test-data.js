import { faker } from "@faker-js/faker";

export function generateTestData() {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    fullname: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    address1: faker.location.streetAddress(),
    address2: faker.location.secondaryAddress(),
    country: 'United States',
    state: faker.location.state(),
    city: faker.location.city(),
    zipcode: faker.location.zipCode(),
    phone: faker.phone.number(),
    company: faker.company.name(),
    cardNumber: faker.finance.creditCardNumber(),
    cardCVC: faker.finance.creditCardCVV(),
    cardExpMonth: faker.date.future().getMonth() + 1, 
    cardExpYear: faker.date.future().getFullYear() + 2 
  };
};