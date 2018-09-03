import { Component, OnInit } from '@angular/core';

import { Flower } from '../flower';
import { FlowerService } from '../flower.service';
// import { FLOWERS } from '../flowers';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {
  // flowers = FLOWERS;
  flowers: Flower[];

  constructor(private flowerService: FlowerService) {}

  ngOnInit() {
    this.getFlowers();
  }

  getFlowers() {
    // this.flowers = this.flowerService.getFlowers();
    this.flowerService
      .getFlowers()
      .subscribe(flowers => (this.flowers = flowers));
  }
}
