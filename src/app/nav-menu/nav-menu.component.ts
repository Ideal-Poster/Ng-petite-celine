import { SoundManager } from './../services/soundmanager.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-nav-menu',
  template: `
    <div class="d-none d-md-block">
    <h1 class="header">
      <p>
        Petite<br>
      </p>
      <p style="
        margin-top: -14px;
        z-index: 10;"class="fadeInDown animated" data-wow-duration="0.6s">{{ title }} </p>
    </h1>

    <ul class="menu-buttons">
      <li class="music">
          <div class="nav-rectangle"></div>
          <a routerLink="/" routerLinkActive="active">Music</a>
      </li>
      <li class="art">
        <div class="nav-rectangle"></div>
        <a routerLink="/art" routerLinkActive="active">Art</a>
      </li>
      <li class="acting">
        <div class="nav-rectangle"></div>
        <a routerLink="/acting" routerLinkActive="active">Acting</a>
      </li>
    </ul>

    <div>
      <a href="https://www.instagram.com/petite_celine/" target="_blank">
        <i class="nav-icon fab fa-instagram"></i>
      </a>
      <a href="https://www.facebook.com/cdutertre.nyc" target="_blank">
        <i class="nav-icon fab fa-facebook"></i>
      </a>
      <a href="https://www.youtube.com/user/celineNYCmusic" target="_blank">
        <i class="nav-icon fab fa-youtube"></i>
      </a>
    </div>
  </div>

  <a href="mailto:petitecelineworld@gmail.com" class="pl-4 pt-3 d-none d-md-block" style="width:300px;"
  style="color: #75707a; position:absolute; bottom: 0; left:-10px;">
    <p>petitecelineworld@gmail.com</p>
  </a>
  `,
  styles: [`
    :host {
      display: block;
      z-index: 10;
    }

    ul.menu-buttons {
      font-size: 44px;
      line-height: 1.2;
      padding-bottom: 20px;
    }

    .nav-icon {
      color: #a4955c;
      font-size: 20.5px;
      margin-right: 20px;
      margin-bottom: 100px;
    }

    .nav-icon:hover {
      color: #7d7246;
    }

    .shadow {
      text-shadow: 4px 4px 5px rgb(40, 39, 39, 0.2);
    }

    ul.menu-buttons > li > * {
      color: #E0DCE0;
    }

    ul.menu-buttons > li > *:hover {
      color: grey;
    }
    .nav-rectangle {
      position: relative;
      display: inline-block;
      background-color: rgb(85, 170, 160);
      width: 8px;
      height: 35px;
      right: 35px;
      top: 3px;
      vertical-align: baseline;
      margin-right: -15px;

    }
    @media (max-width: 575.98px) {}
    @media (max-width: 767.98px) {}
    @media (max-width: 991.98px) {}
    @media (max-width: 1199.98px) {
      .header {
        font-size: 94px;
      }
      ul.menu-buttons {
        font-size: 40px;
      }
    }
  `]
})

export class NavMenuComponent implements OnInit {
  title = 'Celine';
  routeNumber: number;

  constructor(private r: ActivatedRoute, private soundManager: SoundManager) {
      r.params.subscribe(() => {
        if (r.url['_value'].length < 1) {
          this.title = 'Celine';
          this.routeNumber = 0;
        } else {
          if (r.url['_value'][0].path === 'art') {
            this.title = 'Art';
            this.routeNumber = 1;
          } else {
            this.title = 'Actress';
            this.routeNumber = 2;
          }
        }
      });
  }

  ngOnInit() {
    this.rectangle(this.routeNumber);
  }

  rectangle(route) {
    let rectangles = document.getElementsByClassName('nav-rectangle');

    Array.prototype.filter.call(rectangles, function(rectangles) {
      rectangles.classList.add('invisible');
    });

    rectangles[route].classList.replace('invisible', 'visible');
  }


}
