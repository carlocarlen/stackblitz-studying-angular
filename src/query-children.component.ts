import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { ListComponent } from "./list.component";
import { InfoComponent } from "./info.component";

@Component({
    selector: 'app-query-children',
    standalone: true,
    imports: [ListComponent, InfoComponent],
    template: `
      <h2>query children works!</h2>
      <app-list/>
      <p>Got {{ listlength }} items in list</p>
      <p>This is to compare the decorator-based queries with the signal based approach</p>
      <app-info>
      <p>This is some text with <b #test>bold features</b></p>
      </app-info>
    `,
})
export class QueryChildrenComponent implements AfterViewInit {
    @ViewChild(ListComponent) listChild!: ListComponent;

    listlength: number = 0;

    ngAfterViewInit(): void {
        this.listlength = this.listChild.items.length;
    }
}