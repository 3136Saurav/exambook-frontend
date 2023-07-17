import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [`
    .footer {
      position: fixed;
      bottom: 0;
      width: 100%;
    }

    .footer-text {
      flex-grow: 1;
      text-align: center;
    }
  `]
})
export class FooterComponent { }
