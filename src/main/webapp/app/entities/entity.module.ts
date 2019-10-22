import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'ap-payable',
        loadChildren: () => import('./ap-payable/ap-payable.module').then(m => m.Eshipper2ApPayableModule)
      },
      {
        path: 'ap-payable-credit-notes-trans',
        loadChildren: () =>
          import('./ap-payable-credit-notes-trans/ap-payable-credit-notes-trans.module').then(
            m => m.Eshipper2ApPayableCreditNotesTransModule
          )
      },
      {
        path: 'ap-payee-type',
        loadChildren: () => import('./ap-payee-type/ap-payee-type.module').then(m => m.Eshipper2ApPayeeTypeModule)
      },
      {
        path: 'ap-payee',
        loadChildren: () => import('./ap-payee/ap-payee.module').then(m => m.Eshipper2ApPayeeModule)
      },
      {
        path: 'ap-category-type',
        loadChildren: () => import('./ap-category-type/ap-category-type.module').then(m => m.Eshipper2ApCategoryTypeModule)
      },
      {
        path: 'payment-method',
        loadChildren: () => import('./payment-method/payment-method.module').then(m => m.Eshipper2PaymentMethodModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class Eshipper2EntityModule {}
