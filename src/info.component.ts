import { Component, ElementRef, contentChild, effect } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: true,
  template: `
    <hr/>
    <h3>Info component (this was copied from Alain)</h3>
    <div>
      <ng-content></ng-content>
    </div>
    #test contains: "{{infoContent()?.nativeElement?.textContent}}"
    and it's a {{infoContent()?.nativeElement?.tagName}} tag 
    <hr/>
  `,
})
export class InfoComponent {
  infoContent = contentChild<ElementRef>('test');
}