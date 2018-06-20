import { Component } from '@angular/core';
@Component({
  selector: 'app-footer',
  template: `
  <footer class="footer footer-copyright pt-2 pb-3 text-center text-white">
    © 2018 Copyright: Petite Celine
  </footer>
`,
  styles: [`
    .footer {
      background: #1C1820;
    }
  `]
})

export class FooterComponent {
  constructor() {}
}
