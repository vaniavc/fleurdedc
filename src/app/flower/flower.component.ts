import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Flower } from '../flower';
import { FlowerService } from '../flower.service';
@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.scss']
})
export class FlowerComponent implements OnInit {
  @Input()
  flower: Flower;
  constructor(
    private route: ActivatedRoute,
    private flowerService: FlowerService
  ) {}

  ngOnInit() {
    this.getFlower();
  }

  getFlower(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.flowerService
      .getFlower(id)
      .subscribe(flower => (this.flower = flower));
  }
}
