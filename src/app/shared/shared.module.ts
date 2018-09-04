import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { WINDOW_PROVIDERS } from './window.service';
import { DragScrollModule } from 'ngx-drag-scroll';

import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { BoxComponent } from './box/box.component';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, RouterModule, DragScrollModule],
  exports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    NavigationComponent,
    FooterComponent,
    BoxComponent
  ],
  providers: [WINDOW_PROVIDERS],

  declarations: [NavigationComponent, FooterComponent, BoxComponent]
})
export class SharedModule {}
