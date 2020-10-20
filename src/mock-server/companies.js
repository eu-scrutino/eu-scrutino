const faker = require('faker')

const TOTAL_COMPANIES = 50

module.exports = () => {
    let companies = []

    for (let i = 0; i <= TOTAL_COMPANIES; i++) {
        companies.push({
            id: faker.random.uuid(),
            name: faker.company.companyName(),
            funding: faker.commerce.price(),
            inceptionDate: faker.date.past(),
            status: 'ACTIVE',
        })
    }

    return { companies }
}
