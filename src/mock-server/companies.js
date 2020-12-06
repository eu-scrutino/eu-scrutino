const faker = require('faker')

const TOTAL_COMPANIES = 50

module.exports = () => {
    let companies = []

    for (let i = 0; i <= TOTAL_COMPANIES; i++) {
        companies.push({
            id: faker.random.uuid(),
            name: faker.company.companyName(),
            funding: {
                year5: faker.commerce.price(),
                year4: faker.commerce.price(),
                year3: faker.commerce.price(),
                year2: faker.commerce.price(),
                year1: faker.commerce.price(),
            },
            inceptionDate: faker.date.past(),
            business: faker.company.bs(),
            status: 'ACTIVE',
        })
    }

    return { companies }
}
