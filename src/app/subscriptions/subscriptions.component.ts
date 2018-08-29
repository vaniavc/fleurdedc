import { Component, OnInit } from '@angular/core';

import { Flower } from '../flower';
import { FLOWERS } from '../flowers';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {
  flowers = FLOWERS;
  constructor() {}

  ngOnInit() {}
}
