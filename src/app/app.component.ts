import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
  <h1>{{title}}</h1>
  <table-comp></table-comp>
  <button class="string1">delete first line</button>
  <button class="string2">delete second line</button>
  </div>`
})
export class AppComponent {
  title: string = `AWESOME TABLE`;
}
