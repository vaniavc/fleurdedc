import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { FlowerComponent } from './flower/flower.component';
import { FlowersComponent } from './flowers/flowers.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'flowers/:cat', component: FlowersComponent },
  { path: 'flowers/:cat/:id', component: FlowerComponent },
  { path: 'subscriptions', component: SubscriptionsComponent },
  { path: 'workshop', component: WorkshopComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
