import { IApPayable } from 'app/shared/model/ap-payable.model';

export interface IPaymentMethod {
  id?: number;
  name?: string;
  apPayables?: IApPayable[];
}

export class PaymentMethod implements IPaymentMethod {
  constructor(public id?: number, public name?: string, public apPayables?: IApPayable[]) {}
}
