import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { ImageModalComponent} from 'ng-mdb-pro/pro/lightbox';

@Component({
  selector: 'app-art-page',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-sm-4 purple darken-3">
          <app-nav-menu></app-nav-menu>
        </div>

        <div class="col-sm-8 wow fadeIn"style="padding-top: 13.75vh;">
          <mdb-image-modal [modalImages]="imagesBasic" type="margin"></mdb-image-modal>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      background: #1c1820;
      min-height: 100vh;
    }
  `]
})

export class ArtPageComponent {
  title = 'Gallery';
  imagesBasic = [{
      img: 'https://i.ytimg.com/vi/rb8Y38eilRM/maxresdefault.jpg',
      thumb: 'https://i.ytimg.com/vi/rb8Y38eilRM/maxresdefault.jpg',
      description: 'Image 1'
    },
    {
      img: 'https://enviragallery.com/wp-content/uploads/2015/10/Icelandic_Roads_16.jpg',
      thumb: 'https://enviragallery.com/wp-content/uploads/2015/10/Icelandic_Roads_16.jpg',
      description: 'Image 2'
    },
    {
      img: 'https://enviragallery.com/wp-content/uploads/2015/10/Icelandic_Roads_16.jpg',
      thumb: 'https://enviragallery.com/wp-content/uploads/2015/10/Icelandic_Roads_16.jpg',
      description: 'Image 3'
    },
    {
      img: 'https://enviragallery.com/wp-content/uploads/2015/10/Icelandic_Roads_16.jpg',
      thumb: 'https://enviragallery.com/wp-content/uploads/2015/10/Icelandic_Roads_16.jpg',
      description: 'Image 4'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg',
      thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg',
      description: 'Image 5'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg',
      thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg',
      description: 'Image 6'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg',
      thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg',
      description: 'Image 7'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg',
      thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg',
      description: 'Image 8'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg',
      thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg',
      description: 'Image 9'
    }
  ];

  @ViewChild('lightbox') public el: any;

  @HostListener('swipeleft', ['$event']) public swipePrev(event: any) {
    this.el.nextImage();
  }

  @HostListener('swiperight', ['$event']) public swipeNext(event: any) {
    this.el.prevImage();
  }

  constructor() {}

}
