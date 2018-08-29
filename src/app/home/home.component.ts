import { Component, OnInit } from '@angular/core';

import { Flower } from '../flower';
import { FLOWERS } from '../flowers';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    flowers = FLOWERS;

    constructor() { }

    ngOnInit() {
    }

}
