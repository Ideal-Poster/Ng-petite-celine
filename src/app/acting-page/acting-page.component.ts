import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acting-page',
  templateUrl: './acting-page.component.html',
  styleUrls: ['./acting-page.component.css']
})
export class ActingPageComponent implements OnInit {
  mask1 = true;
  mask2 = true;
  mask3 = true;

  constructor() {

  }

  ngOnInit() {
    this.mask1 = false;
    this.mask2 = false;
    this.mask3 = false;
    setTimeout(() => {
      this.mask1 = true;
      this.mask2 = true;
      this.mask3 = true;
    }, 20);
  }

  toggleMask(mask: boolean, index: number) {
    mask === true && index === 1 ? this.mask1 = false : this.mask1 = true;
    mask === true && index === 2 ? this.mask2 = false : this.mask2 = true;
    mask === true && index === 3 ? this.mask3 = false : this.mask3 = true;
  }

  private toggleAll() {

  }

}
