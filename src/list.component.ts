import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  template: `
    <ul>
      @for (item of items; track item) {
        <li>{{item}}</li>
      }
    </ul>
  `,
})
export class ListComponent {
  items = ['This list', "Was copied", "From Alain"];
}
