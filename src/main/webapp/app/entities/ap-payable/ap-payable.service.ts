import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IApPayable } from 'app/shared/model/ap-payable.model';

type EntityResponseType = HttpResponse<IApPayable>;
type EntityArrayResponseType = HttpResponse<IApPayable[]>;

@Injectable({ providedIn: 'root' })
export class ApPayableService {
  public resourceUrl = SERVER_API_URL + 'api/ap-payables';

  constructor(protected http: HttpClient) {}

  create(apPayable: IApPayable): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(apPayable);
    return this.http
      .post<IApPayable>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(apPayable: IApPayable): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(apPayable);
    return this.http
      .put<IApPayable>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IApPayable>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IApPayable[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(apPayable: IApPayable): IApPayable {
    const copy: IApPayable = Object.assign({}, apPayable, {
      invoiceDate: apPayable.invoiceDate != null && apPayable.invoiceDate.isValid() ? apPayable.invoiceDate.format(DATE_FORMAT) : null,
      dueDate: apPayable.dueDate != null && apPayable.dueDate.isValid() ? apPayable.dueDate.format(DATE_FORMAT) : null,
      createdDate: apPayable.createdDate != null && apPayable.createdDate.isValid() ? apPayable.createdDate.format(DATE_FORMAT) : null,
      updatedDate: apPayable.updatedDate != null && apPayable.updatedDate.isValid() ? apPayable.updatedDate.format(DATE_FORMAT) : null
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.invoiceDate = res.body.invoiceDate != null ? moment(res.body.invoiceDate) : null;
      res.body.dueDate = res.body.dueDate != null ? moment(res.body.dueDate) : null;
      res.body.createdDate = res.body.createdDate != null ? moment(res.body.createdDate) : null;
      res.body.updatedDate = res.body.updatedDate != null ? moment(res.body.updatedDate) : null;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((apPayable: IApPayable) => {
        apPayable.invoiceDate = apPayable.invoiceDate != null ? moment(apPayable.invoiceDate) : null;
        apPayable.dueDate = apPayable.dueDate != null ? moment(apPayable.dueDate) : null;
        apPayable.createdDate = apPayable.createdDate != null ? moment(apPayable.createdDate) : null;
        apPayable.updatedDate = apPayable.updatedDate != null ? moment(apPayable.updatedDate) : null;
      });
    }
    return res;
  }
}
