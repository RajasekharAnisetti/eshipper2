import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { filter, map } from 'rxjs/operators';
import { JhiEventManager } from 'ng-jhipster';

import { IApPayeeType } from 'app/shared/model/ap-payee-type.model';
import { AccountService } from 'app/core/auth/account.service';
import { ApPayeeTypeService } from './ap-payee-type.service';

@Component({
  selector: 'jhi-ap-payee-type',
  templateUrl: './ap-payee-type.component.html'
})
export class ApPayeeTypeComponent implements OnInit, OnDestroy {
  apPayeeTypes: IApPayeeType[];
  currentAccount: any;
  eventSubscriber: Subscription;

  constructor(
    protected apPayeeTypeService: ApPayeeTypeService,
    protected eventManager: JhiEventManager,
    protected accountService: AccountService
  ) {}

  loadAll() {
    this.apPayeeTypeService
      .query()
      .pipe(
        filter((res: HttpResponse<IApPayeeType[]>) => res.ok),
        map((res: HttpResponse<IApPayeeType[]>) => res.body)
      )
      .subscribe((res: IApPayeeType[]) => {
        this.apPayeeTypes = res;
      });
  }

  ngOnInit() {
    this.loadAll();
    this.accountService.identity().subscribe(account => {
      this.currentAccount = account;
    });
    this.registerChangeInApPayeeTypes();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IApPayeeType) {
    return item.id;
  }

  registerChangeInApPayeeTypes() {
    this.eventSubscriber = this.eventManager.subscribe('apPayeeTypeListModification', response => this.loadAll());
  }
}
