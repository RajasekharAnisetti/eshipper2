import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Eshipper2SharedModule } from 'app/shared/shared.module';
import { Eshipper2CoreModule } from 'app/core/core.module';
import { Eshipper2AppRoutingModule } from './app-routing.module';
import { Eshipper2HomeModule } from './home/home.module';
import { Eshipper2EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Eshipper2SharedModule,
    Eshipper2CoreModule,
    Eshipper2HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Eshipper2EntityModule,
    Eshipper2AppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class Eshipper2AppModule {}
