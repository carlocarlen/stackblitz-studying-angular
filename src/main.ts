import { Component, computed, effect, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Observable, map } from 'rxjs';
import 'zone.js';
import { CommonModule } from '@angular/common';
import { QueryChildrenComponent } from './query-children.component';
import { NameFormComponent } from './app/components/name-form/name-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, QueryChildrenComponent, NameFormComponent ],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <p>
    <button (click)="incrementCounter()">Increment</button>
    <p>Counter is: {{ counter() }} </p>
    <p>A computed counter is: {{ doubleCounter() }} </p>
    <p>A computed Observable is: {{ counter$ | async }}</p>
    <p>A computed Signal from Observable is: {{ counterFinalSignal() }} </p>
    <app-query-children></app-query-children>
    <app-name-form></app-name-form>
  `,
})
export class App {
  name = 'Carlo';
  counter = signal(0);
  doubleCounter = computed(() => this.counter()*2);

  counter$: Observable<number> = toObservable(this.counter).pipe(
    map(current => current*3)
  )

  counterFinalSignal = toSignal(this.counter$);

  constructor() {
    effect(() => {console.log(`The current counter is ${this.counter()}`)})
  }

  incrementCounter() {
    this.counter.update(current => current + 1);
  }
}

bootstrapApplication(App);
