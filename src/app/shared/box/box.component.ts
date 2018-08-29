import { Component, OnInit, Input } from '@angular/core';

import { Flower } from 'src/app/flower';
import { FLOWERS } from 'src/app/flowers';

@Component({
    selector: 'app-box',
    templateUrl: './box.component.html',
    styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {
    @Input() flower: Flower;

    constructor() { }

    ngOnInit() {
    }

}
