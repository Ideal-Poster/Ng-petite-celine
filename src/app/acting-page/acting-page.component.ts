import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acting-page',
  templateUrl: './acting-page.component.html',
  styleUrls: ['./acting-page.component.css']
})
export class ActingPageComponent implements OnInit {
  title = 'Actress';
  mask1 = true;
  mask2 = true;
  mask3 = true;

  constructor() {

  }

  ngOnInit() {
  }

  toggleMask(mask: boolean, index: number) {
    mask === true && index === 1 ? this.mask1 = false : this.mask1 = true;
    mask === true && index === 2 ? this.mask2 = false : this.mask2 = true;
    mask === true && index === 3 ? this.mask3 = false : this.mask3 = true;
  }

  private toggleAll() {

  }

}
