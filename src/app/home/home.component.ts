import { Component, OnInit } from '@angular/core';

import { Flower } from '../flower';
import { FlowerService } from '../flower.service';
// import { FLOWERS } from '../flowers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
