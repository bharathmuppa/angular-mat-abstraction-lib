import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'mc-object',
  templateUrl: './object.component.html'
})
export class ObjectComponent implements OnInit {
  @Input()
  key: any;
  @Input()
  keyClass: any;
  @Input()
  value: any;
  @Input()
  valueClass: any;
  @Input()
  color: string;
  @Input()
  delimiter: string;
  @Input()
  direction: string;

  constructor() {
    this.direction = 'row';
    this.delimiter = ':';
  }

  ngOnInit() {
  }

}
