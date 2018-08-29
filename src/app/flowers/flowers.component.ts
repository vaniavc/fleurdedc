import { Component, OnInit, Input } from '@angular/core';

import { Flower } from 'src/app/flower';
import { FLOWERS } from 'src/app/flowers';

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.scss']
})
export class FlowersComponent implements OnInit {
  flowers = FLOWERS;
  constructor() {}

  ngOnInit() {}
}
