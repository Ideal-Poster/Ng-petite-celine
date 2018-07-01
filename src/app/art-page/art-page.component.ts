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
      img: 'https://images.pexels.com/photos/1195214/pexels-photo-1195214.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      thumb: 'https://images.pexels.com/photos/1195214/pexels-photo-1195214.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      description: 'Image 1'
    },
    {
      img: 'https://images.pexels.com/photos/730896/pexels-photo-730896.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      thumb: 'https://images.pexels.com/photos/730896/pexels-photo-730896.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
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
      img: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      thumb: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      description: 'Image 6'
    },
    {
      img: 'https://images.pexels.com/photos/414530/pexels-photo-414530.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      thumb: 'https://images.pexels.com/photos/414530/pexels-photo-414530.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      description: 'Image 7'
    },
    {
      img: 'https://images.pexels.com/photos/1039302/pexels-photo-1039302.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      thumb: 'https://images.pexels.com/photos/1039302/pexels-photo-1039302.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      description: 'Image 8'
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
