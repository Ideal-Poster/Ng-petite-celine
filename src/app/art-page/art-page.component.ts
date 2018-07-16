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
      img: 'https://preview.ibb.co/eA4E4J/Eclipse_Light.jpg',
      thumb: 'https://preview.ibb.co/eA4E4J/Eclipse_Light.jpg',
      description: 'Image 1'
    },
    {
      img: 'https://preview.ibb.co/dBpgjJ/Eclipse.jpg',
      thumb: 'https://preview.ibb.co/dBpgjJ/Eclipse.jpg',
      description: 'Image 2'
    },
    {
      img: 'https://preview.ibb.co/iY6iyd/Tulips_Light.jpg',
      thumb: 'https://preview.ibb.co/iY6iyd/Tulips_Light.jpg',
      description: 'Image 3'
    },
    {
      img: 'https://preview.ibb.co/cpT7PJ/Tulips.jpg',
      thumb: 'https://preview.ibb.co/cpT7PJ/Tulips.jpg',
      description: 'Image 4'
    },
    {
      img: 'https://preview.ibb.co/fgqXry/Tulips_Light_Only.jpg',
      thumb: 'https://preview.ibb.co/fgqXry/Tulips_Light_Only.jpg',
      description: 'Image 5'
    },
    {
      img: 'https://preview.ibb.co/nqwNry/Portal.jpg',
      thumb: 'https://preview.ibb.co/nqwNry/Portal.jpg',
      description: 'Image 6'
    },
    {
      img: 'https://preview.ibb.co/gTFRJd/Portal_Light.jpg',
      thumb: 'https://preview.ibb.co/gTFRJd/Portal_Light.jpg',
      description: 'Image 7'
    },
    {
      img: 'https://preview.ibb.co/iS544J/Portal_Light_Only.jpg',
      thumb: 'https://preview.ibb.co/iS544J/Portal_Light_Only.jpg',
      description: 'Image 8'
    },
    {
      img: 'https://preview.ibb.co/dG8fdd/Healing_Hands.jpg',
      thumb: 'https://preview.ibb.co/dG8fdd/Healing_Hands.jpg',
      description: 'Image 9'
    },
    {
      img: 'https://preview.ibb.co/j4GYyd/Healing_Hands_Light.jpg',
      thumb: 'https://preview.ibb.co/j4GYyd/Healing_Hands_Light.jpg',
      description: 'Image 10'
    },
    {
      img: 'https://preview.ibb.co/b3ofdd/Healing_Hands_Light_Only.jpg',
      thumb: 'https://preview.ibb.co/b3ofdd/Healing_Hands_Light_Only.jpg',
      description: 'Image  11'
    },
       {
      img: 'https://preview.ibb.co/nDcTWy/Healing_Hands_Glow_Only.jpg',
      thumb: 'https://preview.ibb.co/nDcTWy/Healing_Hands_Glow_Only.jpg',
      description: 'Image  12'
    },
    {
      img: 'https://preview.ibb.co/ewnHPJ/Gypsy_Lynx.jpg',
      thumb: 'https://preview.ibb.co/ewnHPJ/Gypsy_Lynx.jpg',
      description: 'Image  13'
    },
    {
      img: 'https://preview.ibb.co/gi2TWy/Gypsy_Lynx_in_Space.jpg',
      thumb: 'https://preview.ibb.co/gi2TWy/Gypsy_Lynx_in_Space.jpg',
      description: 'Image  14'
    },
    {
      img: 'https://preview.ibb.co/eYu8Wy/Gypsy_Lynx_in_Space_Light.jpg',
      thumb: 'https://preview.ibb.co/eYu8Wy/Gypsy_Lynx_in_Space_Light.jpg',
      description: 'Image  15'
    },
    {
      img: 'https://preview.ibb.co/mkpxPJ/Gypsy_Lynx_in_Space_Light_Only.jpg',
      thumb: 'https://preview.ibb.co/mkpxPJ/Gypsy_Lynx_in_Space_Light_Only.jpg',
      description: 'Image  16'
    },
    {
      img: 'https://preview.ibb.co/dEatyd/Gypsy_Lynx_in_Smoke.jpg',
      thumb: 'https://preview.ibb.co/dEatyd/Gypsy_Lynx_in_Smoke.jpg',
      description: 'Image  17'
    },
       {
      img: 'https://preview.ibb.co/ntsHPJ/Gypsy_Lynx_in_Smoke_Light_Only.jpg',
      thumb: 'https://preview.ibb.co/ntsHPJ/Gypsy_Lynx_in_Smoke_Light_Only.jpg',
      description: 'Image  18'
    },
    {
      img: 'https://preview.ibb.co/dh1Nry/Gypsy_Lynx_in_Smoke_Light.jpg',
      thumb: 'https://preview.ibb.co/dh1Nry/Gypsy_Lynx_in_Smoke_Light.jpg',
      description: 'Image  19'
    },
    {
      img: 'https://preview.ibb.co/h8EaBy/Gypsy_Lynx_Light.jpg',
      thumb: 'https://preview.ibb.co/h8EaBy/Gypsy_Lynx_Light.jpg',
      description: 'Image  20'
    },
    {
      img: 'https://preview.ibb.co/mBN1jJ/Gypsy_Lynx_Light_Only.jpg',
      thumb: 'https://preview.ibb.co/mBN1jJ/Gypsy_Lynx_Light_Only.jpg',
      description: 'Image  21'
    },
    {
      img: 'https://preview.ibb.co/idhZ4J/Green_Invasion.jpg',
      thumb: 'https://preview.ibb.co/idhZ4J/Green_Invasion.jpg',
      description: 'Image  22'
    },
    {
      img: 'https://preview.ibb.co/faHHPJ/Green_Invasion_Light.jpg',
      thumb: 'https://preview.ibb.co/faHHPJ/Green_Invasion_Light.jpg',
      description: 'Image  23'
    },
      {
      img: 'https://preview.ibb.co/h8c1jJ/Green_Invasion_Light_Only.jpg',
      thumb: 'https://preview.ibb.co/h8c1jJ/Green_Invasion_Light_Only.jpg',
      description: 'Image  24'
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
