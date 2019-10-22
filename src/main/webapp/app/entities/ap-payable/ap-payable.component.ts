import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { filter, map } from 'rxjs/operators';
import { JhiEventManager } from 'ng-jhipster';

import { IApPayable } from 'app/shared/model/ap-payable.model';
import { AccountService } from 'app/core/auth/account.service';
import { ApPayableService } from './ap-payable.service';

@Component({
  selector: 'jhi-ap-payable',
  templateUrl: './ap-payable.component.html'
})
export class ApPayableComponent implements OnInit, OnDestroy {
  apPayables: IApPayable[];
  currentAccount: any;
  eventSubscriber: Subscription;

  constructor(
    protected apPayableService: ApPayableService,
    protected eventManager: JhiEventManager,
    protected accountService: AccountService
  ) {}

  loadAll() {
    this.apPayableService
      .query()
      .pipe(
        filter((res: HttpResponse<IApPayable[]>) => res.ok),
        map((res: HttpResponse<IApPayable[]>) => res.body)
      )
      .subscribe((res: IApPayable[]) => {
        this.apPayables = res;
      });
  }

  ngOnInit() {
    this.loadAll();
    this.accountService.identity().subscribe(account => {
      this.currentAccount = account;
    });
    this.registerChangeInApPayables();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IApPayable) {
    return item.id;
  }

  registerChangeInApPayables() {
    this.eventSubscriber = this.eventManager.subscribe('apPayableListModification', response => this.loadAll());
  }
}
