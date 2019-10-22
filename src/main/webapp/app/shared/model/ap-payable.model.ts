import { Moment } from 'moment';
import { IApPayableCreditNotesTrans } from 'app/shared/model/ap-payable-credit-notes-trans.model';

export interface IApPayable {
  id?: number;
  invoiceDate?: Moment;
  invoiceAmount?: number;
  invoiceNo?: string;
  comment?: string;
  isDispute?: boolean;
  docPath?: string;
  gst?: number;
  hst?: number;
  pst?: number;
  qst?: number;
  totalAmount?: number;
  balanceDue?: number;
  dueDate?: Moment;
  createdDate?: Moment;
  updatedDate?: Moment;
  apPayableCreditNotesTrans?: IApPayableCreditNotesTrans[];
  creditUsedFrmAPPayables?: IApPayableCreditNotesTrans[];
  apPayeeTypeId?: number;
  apPayeeId?: number;
  apCategoryTypeId?: number;
  paymentMethodId?: number;
}

export class ApPayable implements IApPayable {
  constructor(
    public id?: number,
    public invoiceDate?: Moment,
    public invoiceAmount?: number,
    public invoiceNo?: string,
    public comment?: string,
    public isDispute?: boolean,
    public docPath?: string,
    public gst?: number,
    public hst?: number,
    public pst?: number,
    public qst?: number,
    public totalAmount?: number,
    public balanceDue?: number,
    public dueDate?: Moment,
    public createdDate?: Moment,
    public updatedDate?: Moment,
    public apPayableCreditNotesTrans?: IApPayableCreditNotesTrans[],
    public creditUsedFrmAPPayables?: IApPayableCreditNotesTrans[],
    public apPayeeTypeId?: number,
    public apPayeeId?: number,
    public apCategoryTypeId?: number,
    public paymentMethodId?: number
  ) {
    this.isDispute = this.isDispute || false;
  }
}
