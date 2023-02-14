const faker = require('faker');

var Faker = function() {

    this.email = async function() {
        return await faker.internet.email();
    };

    this.name = async function() {
        return await faker.name.findName();
    }

    this.phone = async function() {
        return await faker.phone.phoneNumberFormat();
    }

    this.lorem = async function() {
        return await faker.lorem.sentence();
    }
};

module.exports = Faker;