import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { BoxComponent } from './box/box.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        BoxComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
