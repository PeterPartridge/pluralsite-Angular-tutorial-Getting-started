import { Component } from '@angular/core';

@Component({ // '' allows mutiline html in es 2015
  selector: 'pm-root',
  templateUrl: 'app.component.html'

})
export class AppComponent {
  pageTitle: string = 'Acme Product Mangment';
  title: string = 'World';
}
