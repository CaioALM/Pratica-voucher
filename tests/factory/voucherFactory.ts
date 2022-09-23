import {faker} from '@faker-js/faker';


export default async function createVoucher() {

    return {
        code: faker.lorem.word(2),
        discount: 10
    }
}