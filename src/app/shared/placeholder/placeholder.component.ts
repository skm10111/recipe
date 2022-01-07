import {  Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPlaceholder]',
  // templateUrl: './placeholder.component.html',
  // styleUrls: ['./placeholder.component.css']
})
export class PlaceholderDirective  {
    constructor(public viewContainerRef: ViewContainerRef){}
}
