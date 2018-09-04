import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Flower } from 'src/app/flower';
import { FlowerService } from '../flower.service';

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.scss']
})
export class FlowersComponent implements OnInit {
  // flowers = FLOWERS;
  flowers: Flower[];
  idCat;

  constructor(
    private route: ActivatedRoute,
    private flowerService: FlowerService
  ) {}

  ngOnInit() {
    this.initData();
  }

  initData() {
    this.route.params.subscribe(params => {
      this.idCat = params['cat']; // --> Name must match wanted parameter
      console.log('CAT ID', this.idCat);

      this.getFlowers();
      console.log(this.flowers, 'FLOWERS');
    });
  }

  getFlowers(): void {
    // this.flowers = this.flowerService.getFlowers();

    this.flowerService
      .getFlowers()
      .subscribe(
        flowers =>
          (this.flowers = flowers.filter(data => data.category === this.idCat))
      );
  }
}
