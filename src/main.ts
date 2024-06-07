import { Component, computed, effect, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <p>
    <button (click)="incrementCounter()">Increment</button>
    <p>Counter is: {{ counter() }} </p>
    <p>A computed counter is: {{ doubleCounter() }} </p>
    <p>THE ASYNC DOES NOT WORK HERE???</p>
    <p>A computed Observable is: {{ counter$ }}</p>
    <p>A computed Signal from Observable is: </p>
  `,
})
export class App {
  name = 'Carlo';
  counter = signal(0);
  doubleCounter = computed(() => this.counter()*2);

  counter$: Observable<number> = toObservable(this.counter);

  constructor() {
    effect(() => {console.log(`The current counter is ${this.counter()}`)})
  }

  incrementCounter() {
    this.counter.update(current => current + 1);
  }
}

bootstrapApplication(App);
