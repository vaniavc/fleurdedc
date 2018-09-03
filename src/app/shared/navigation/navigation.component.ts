import { Component, OnInit, Input, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from '../window.service';

import { Flower } from 'src/app/flower';

// import { FLOWERS } from 'src/app/flowers';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public hamburger: boolean;
  public scrolled: boolean;
  public burger: boolean;

  @Input()
  flower: Flower;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.burger = false;
    }, 500);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number =
      this.window.pageYOffset ||
      this.document.documentElement.scrollTop ||
      this.document.body.scrollTop ||
      0;
    if (number >= 60 && !this.hamburger) {
      this.scrolled = true;
    } else if (this.scrolled && number < 59) {
      this.scrolled = false;
    }
  }
}
