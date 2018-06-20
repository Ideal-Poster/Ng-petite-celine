import { SoundManager } from './../services/soundmanager.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
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
