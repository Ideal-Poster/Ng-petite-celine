import { SoundManager } from './../services/soundmanager.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
@Component({
  selector: 'app-nav-menu',
  template: `
    <div class="d-none d-md-block">
    <h1 class="header">
      <p>
        Petite<br>
      </p>
      <p style="margin-top: -14px;
      z-index: 100;" class="fadeInDown animated" data-wow-duration="0.6s">{{ title }} </p>
    </h1>

    <ul class="menu-buttons">
      <li class="music">
        <a routerLink="/" routerLinkActive="active" (click)="stopPlayer()">Music</a>
      </li>
      <li class="art">
        <a routerLink="/art" routerLinkActive="active" (click)="stopPlayer()">Art</a>
      </li>
      <li class="acting">
        <a routerLink="/acting" routerLinkActive="active" (click)="stopPlayer()">Acting</a>
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

  <a href="mailto:petitecelineworld@gmail.com?Subject=Hello%20again" class="pl-4 pb-3 grey-text fixed-bottom" style="width:300px;">
    <p>petitecelineworld@gmail.com</p>
  </a>
  `,
  styles: [`
    :host {
      display: block;
      z-index: 20;
    }

    ul.menu-buttons {
      font-size: 44px;
      line-height: 1.2;
      padding-bottom: 20px;
    }

    .nav-icon {
      color: #a4955c;
      font-size: 20px;
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
  `]
})

export class NavMenuComponent {
  title = 'Celine';
  constructor(r: ActivatedRoute, private soundManager: SoundManager) {
      r.params.subscribe(() => {
        if (r.url['_value'].length < 1) {
          this.title = 'Celine';
        } else {
          r.url['_value'][0].path === 'art' ? this.title = 'Gallery' : this.title = 'Actress';
        }
      });
  }

  stopPlayer() {
    this.soundManager.pause();
  }
}
