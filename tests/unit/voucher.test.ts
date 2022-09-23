
import voucherService, { VoucherApplyData, VoucherCreateData } from '../../src/services/voucherService';
import voucherRepository from '../../src/repositories/voucherRepository';
import voucherFactory from '../factory/voucherFactory'
import { jest } from '@jest/globals'

beforeEach(() => {
  jest.resetAllMocks();
  jest.clearAllMocks();
});

describe('Unit test of voucher', () => {
  it('Test of voucher creation', async () => {

    const newVoucher = {
      code: "teste",
      discount: 10
    }

    jest
      .spyOn(voucherRepository, 'getVoucherByCode')
      .mockImplementation((): any => {});

    jest
      .spyOn(voucherRepository, 'createVoucher')
      .mockImplementation((): any => {});

    await voucherService.createVoucher(newVoucher.code, newVoucher.discount);

    expect(voucherRepository.getVoucherByCode).toBeCalled();
    expect(voucherRepository.createVoucher).toBeCalled();

  });

  it('If there is a voucher a new voucher cant be created', async () => {
    
    const newVoucher = {
      code: "teste",
      discount: 10
    }

    jest
      .spyOn(voucherRepository, 'getVoucherByCode')
      .mockImplementationOnce((): any => {
        return {
        code: "teste", 
        discount: 10
        }
      });
      

      const promise = voucherService.createVoucher(
        newVoucher.code,
        newVoucher.discount
      )

      expect(promise).rejects.toEqual({
        type: 'conflict',
        message: 'Voucher already exist.'
      })
      expect(voucherRepository.createVoucher).not.toBeCalled();
  });

  
});

