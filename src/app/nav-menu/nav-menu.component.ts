import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  title = 'Celine';
  constructor(r: ActivatedRoute) {
      r.params.subscribe(() => {
        if (r.url['_value'].length < 1) {
          this.title = 'Celine';
        } else {
          r.url['_value'][0].path === 'art' ? this.title = 'Gallery' : this.title = 'Actress';
        }
      });
  }

  ngOnInit() {
  }

}
