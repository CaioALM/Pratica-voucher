import {faker} from '@faker-js/faker';


async function createVoucher() {

    return {
        code: faker.lorem.word(2),
        discount: 10
    }
}
async function applyDiscount(value: number, discount: number) {
    return value - value * (discount / 100);

}


  export default {
    createVoucher,
    applyDiscount
  }