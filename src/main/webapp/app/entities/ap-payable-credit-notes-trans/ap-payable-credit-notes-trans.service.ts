import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IApPayableCreditNotesTrans } from 'app/shared/model/ap-payable-credit-notes-trans.model';

type EntityResponseType = HttpResponse<IApPayableCreditNotesTrans>;
type EntityArrayResponseType = HttpResponse<IApPayableCreditNotesTrans[]>;

@Injectable({ providedIn: 'root' })
export class ApPayableCreditNotesTransService {
  public resourceUrl = SERVER_API_URL + 'api/ap-payable-credit-notes-trans';

  constructor(protected http: HttpClient) {}

  create(apPayableCreditNotesTrans: IApPayableCreditNotesTrans): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(apPayableCreditNotesTrans);
    return this.http
      .post<IApPayableCreditNotesTrans>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(apPayableCreditNotesTrans: IApPayableCreditNotesTrans): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(apPayableCreditNotesTrans);
    return this.http
      .put<IApPayableCreditNotesTrans>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IApPayableCreditNotesTrans>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IApPayableCreditNotesTrans[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(apPayableCreditNotesTrans: IApPayableCreditNotesTrans): IApPayableCreditNotesTrans {
    const copy: IApPayableCreditNotesTrans = Object.assign({}, apPayableCreditNotesTrans, {
      createDate:
        apPayableCreditNotesTrans.createDate != null && apPayableCreditNotesTrans.createDate.isValid()
          ? apPayableCreditNotesTrans.createDate.format(DATE_FORMAT)
          : null
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.createDate = res.body.createDate != null ? moment(res.body.createDate) : null;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((apPayableCreditNotesTrans: IApPayableCreditNotesTrans) => {
        apPayableCreditNotesTrans.createDate =
          apPayableCreditNotesTrans.createDate != null ? moment(apPayableCreditNotesTrans.createDate) : null;
      });
    }
    return res;
  }
}
