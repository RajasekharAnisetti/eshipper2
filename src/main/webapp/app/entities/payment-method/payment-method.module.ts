import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Eshipper2SharedModule } from 'app/shared/shared.module';
import { PaymentMethodComponent } from './payment-method.component';
import { PaymentMethodDetailComponent } from './payment-method-detail.component';
import { PaymentMethodUpdateComponent } from './payment-method-update.component';
import { PaymentMethodDeletePopupComponent, PaymentMethodDeleteDialogComponent } from './payment-method-delete-dialog.component';
import { paymentMethodRoute, paymentMethodPopupRoute } from './payment-method.route';

const ENTITY_STATES = [...paymentMethodRoute, ...paymentMethodPopupRoute];

@NgModule({
  imports: [Eshipper2SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    PaymentMethodComponent,
    PaymentMethodDetailComponent,
    PaymentMethodUpdateComponent,
    PaymentMethodDeleteDialogComponent,
    PaymentMethodDeletePopupComponent
  ],
  entryComponents: [PaymentMethodDeleteDialogComponent]
})
export class Eshipper2PaymentMethodModule {}
