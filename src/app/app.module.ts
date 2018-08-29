import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { WorkshopComponent } from './workshop/workshop.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { FlowerComponent } from './flower/flower.component';
import { FlowersComponent } from './flowers/flowers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkshopComponent,
    SubscriptionsComponent,
    FlowerComponent,
    FlowersComponent
  ],
  imports: [BrowserModule, SharedModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
