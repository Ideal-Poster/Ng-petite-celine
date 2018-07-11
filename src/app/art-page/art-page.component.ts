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
      img: '../../assets/gallery-images/photo-1.JPG',
      thumb: '../../assets/gallery-images/photo-1.JPG',
      description: 'Image 1'
    },
    {
      img: '../../assets/gallery-images/photo-2.JPG',
      thumb: '../../assets/gallery-images/photo-2.JPG',
      description: 'Image 2'
    },
    {
      img: '../../assets/gallery-images/photo-3.JPG',
      thumb: '../../assets/gallery-images/photo-3.JPG',
      description: 'Image 3'
    },
    {
      img: '../../assets/gallery-images/photo-4.JPG',
      thumb: '../../assets/gallery-images/photo-4.JPG',
      description: 'Image 4'
    },
    {
      img: '../../assets/gallery-images/photo-5.JPG',
      thumb: '../../assets/gallery-images/photo-5.JPG',
      description: 'Image 5'
    },
    {
      img: '../../assets/gallery-images/photo-6.JPG',
      thumb: '../../assets/gallery-images/photo-6.JPG',
      description: 'Image 6'
    },
    {
      img: '../../assets/gallery-images/photo-7.JPG',
      thumb: '../../assets/gallery-images/photo-7.JPG',
      description: 'Image 7'
    },
    {
      img: '../../assets/gallery-images/photo-8.JPG',
      thumb: '../../assets/gallery-images/photo-8.JPG',
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
