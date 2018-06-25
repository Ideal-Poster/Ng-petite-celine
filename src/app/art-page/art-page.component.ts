import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
@Component({
  selector: 'app-art-page',
  template: `

    <div style="position: relative;">
    <div class="poop d-none d-md-block"
      style="
      position: absolute;
      height: 100%;
      left: -20;
      width:30%;
      background: rgb(67, 46, 89);">
    </div>
      <div class="container">

        <div class="row">
          <div class="d-none d-md-block col-sm-4" style="background: rgb(67, 46, 89)">
            <app-nav-menu></app-nav-menu>
          </div>

          <div class="col-md-8 wow fadeIn"style="padding-top: 13.75vh;">
            <mdb-image-modal [modalImages]="imagesBasic" type="margin"></mdb-image-modal>
          </div>
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
  title = 'Art';
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
      img: 'https://images.freeimages.com/images/large-previews/476/chicago-night-traffic-1447010.jpg',
      thumb: 'https://images.freeimages.com/images/large-previews/476/chicago-night-traffic-1447010.jpg',
      description: 'Image 3'
    },
    {
      img: 'https://images.freeimages.com/images/large-previews/0d6/blue-flowers-with-macro-4-1400913.jpg',
      thumb: 'https://images.freeimages.com/images/large-previews/0d6/blue-flowers-with-macro-4-1400913.jpg',
      description: 'Image 4'
    },
    {
      img: 'https://images.freeimages.com/images/large-previews/3d3/droplets-1395002.jpg',
      thumb: 'https://images.freeimages.com/images/large-previews/3d3/droplets-1395002.jpg',
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
