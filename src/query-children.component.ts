import { Component } from "@angular/core";
import { ListComponent } from "./list.component";

@Component({
    selector: 'app-query-children',
    standalone: true,
    imports: [ListComponent],
    template: `
      <h2>query children works!</h2>
      <app-list/>
    `,
})
export class QueryChildrenComponent {
    
}