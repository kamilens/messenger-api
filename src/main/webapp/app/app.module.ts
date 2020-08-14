import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { MessengerSharedModule } from 'app/shared/shared.module';
import { MessengerCoreModule } from 'app/core/core.module';
import { MessengerAppRoutingModule } from './app-routing.module';
import { MessengerHomeModule } from './home/home.module';
import { MessengerEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    MessengerSharedModule,
    MessengerCoreModule,
    MessengerHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    MessengerEntityModule,
    MessengerAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class MessengerAppModule {}
