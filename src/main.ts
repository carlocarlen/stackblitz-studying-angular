import { Component, effect, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
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
    <p>A computed counter is: {{ doubleCounter()() }} </p>
  `,
})
export class App {
  name = 'Carlo';
  counter = signal(0);
  doubleCounter = signal(() => this.counter()*2);

  constructor() {
    effect(() => {console.log(`The current counter is ${this.counter()}`)})
  }

  incrementCounter() {
    this.counter.update(current => current + 1);
  }
}

bootstrapApplication(App);
