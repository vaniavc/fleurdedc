import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { BoxComponent } from './box/box.component';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        RouterModule,
    ],
    exports: [
        CommonModule,
        FlexLayoutModule,
        NavigationComponent,
        FooterComponent,
        BoxComponent
    ],
    declarations: [NavigationComponent, FooterComponent, BoxComponent]
})
export class SharedModule { }