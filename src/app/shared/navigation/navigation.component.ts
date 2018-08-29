import { Component, OnInit, Input } from '@angular/core';

import { Flower } from 'src/app/flower';
import { FLOWERS } from 'src/app/flowers';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input()
  flower: Flower;
  constructor() {}

  ngOnInit() {}
}
