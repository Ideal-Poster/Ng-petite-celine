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
  imagesBasic = [
    {
      img: '../../assets/gallery-images/Eclipse - Light.png',
      thumb: '../../assets/gallery-images/Eclipse - Light.png',
      description: 'Image 1'
    },
    {
      img: '../../assets/gallery-images/Eclipse.png',
      thumb: '../../assets/gallery-images/Eclipse.png',
      description: 'Image 2'
    },
    {
      img: '../../assets/gallery-images/Green Invasion - Light Only.jpg',
      thumb: '../../assets/gallery-images/Green Invasion - Light Only.jpg',
      description: 'Image 3'
    },
    {
      img: '../../assets/gallery-images/Green Invasion - Light.jpg',
      thumb: '../../assets/gallery-images/Green Invasion - Light.jpg',
      description: 'Image 4'
    },
    {
      img: '../../assets/gallery-images/Green Invasion.jpg',
      thumb: '../../assets/gallery-images/Green Invasion.jpg',
      description: 'Image 5'
    },
    {
      img: '../../assets/gallery-images/GypsyLynx - Light Only.jpg',
      thumb: '../../assets/gallery-images/GypsyLynx - Light Only.jpg',
      description: 'Image 6'
    },
    {
      img: '../../assets/gallery-images/GypsyLynx - Light.jpg',
      thumb: '../../assets/gallery-images/GypsyLynx - Light.jpg',
      description: 'Image 7'
    },
    {
      img: '../../assets/gallery-images/GypsyLynx in Smoke -Light.jpg',
      thumb: '../../assets/gallery-images/GypsyLynx in Smoke -Light.jpg',
      description: 'Image 8'
    },
    {
      img: '../../assets/gallery-images/GypsyLynx in Smoke- Light Only.jpg',
      thumb: '../../assets/gallery-images/GypsyLynx in Smoke- Light Only.jpg',
      description: 'Image 9'
    },
    {
      img: '../../assets/gallery-images/GypsyLynx in Smoke.jpg',
      thumb: '../../assets/gallery-images/GypsyLynx in Smoke.jpg',
      description: 'Image 10'
    },
       {
      img: '../../assets/gallery-images/GypsyLynx in Space - Light Only.jpg',
      thumb: '../../assets/gallery-images/GypsyLynx in Space - Light Only.jpg',
      description: 'Image 11'
    },
    {
      img: '../../assets/gallery-images/GypsyLynx in Space - Light.jpg',
      thumb: '../../assets/gallery-images/GypsyLynx in Space - Light.jpg',
      description: 'Image 12'
    },
    {
      img: '../../assets/gallery-images/GypsyLynx in Space.jpg',
      thumb: '../../assets/gallery-images/GypsyLynx in Space.jpg',
      description: 'Image 13'
    },
    {
      img: '../../assets/gallery-images/GypsyLynx.jpg',
      thumb: '../../assets/gallery-images/GypsyLynx.jpg',
      description: 'Image 14'
    },
    {
      img: '../../assets/gallery-images/Healing Hands - Glow Only.jpg',
      thumb: '../../assets/gallery-images/Healing Hands - Glow Only.jpg',
      description: 'Image 15'
    },
    {
      img: '../../assets/gallery-images/Healing Hands - Light Only.jpg',
      thumb: '../../assets/gallery-images/Healing Hands - Light Only.jpg',
      description: 'Image 16'
    },
       {
      img: '../../assets/gallery-images/Healing Hands - Light.jpg',
      thumb: '../../assets/gallery-images/Healing Hands - Light.jpg',
      description: 'Image 17'
    },
    {
      img: '../../assets/gallery-images/Healing Hands.jpg',
      thumb: '../../assets/gallery-images/Healing Hands.jpg',
      description: 'Image 18'
    },
    {
      img: '../../assets/gallery-images/Portal - Light Only.jpg',
      thumb: '../../assets/gallery-images/Portal - Light Only.jpg',
      description: 'Image 19'
    },
    {
      img: '../../assets/gallery-images/Portal - Light.jpg',
      thumb: '../../assets/gallery-images/Portal - Light.jpg',
      description: 'Image 20'
    },
    {
      img: '../../assets/gallery-images/Portal.jpg',
      thumb: '../../assets/gallery-images/Portal.jpg',
      description: 'Image 21'
    },
       {
      img: '../../assets/gallery-images/Tulips - Light Only_.jpg',
      thumb: '../../assets/gallery-images/Tulips - Light Only_.jpg',
      description: 'Image 22'
    },
    {
      img: '../../assets/gallery-images/Tulips - Light.jpg',
      thumb: '../../assets/gallery-images/Tulips - Light.jpg',
      description: 'Image 23'
    },
    {
      img: '../../assets/gallery-images/Tulips.jpg',
      thumb: '../../assets/gallery-images/Tulips.jpg',
      description: 'Image 24'
    },
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
