import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
// import { MatIconModule } from '@angular/material';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
// import { Ng2PageScrollModule } from 'ng2-page-scroll';

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
        FooterComponent
    ],
    declarations: [NavigationComponent, FooterComponent]
})
export class SharedModule { }