import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import {FormControlConfiguration} from '../models/mc.model';

@Component({
  selector: 'mc-mat-input-text-currency',
  templateUrl: './mat-input-text-currency.component.html',
  styleUrls: ['./mat-input-text-currency.component.scss']
})
export class MatInputTextCurrencyComponent implements OnInit {
  @Input()
  control: FormControl;
  @Input()
  controlConfiguration: FormControlConfiguration;

  constructor() {
  }

  ngOnInit() {
  }

  hasValidator(): boolean {
    if (this.control && this.control.validator && this.control.validator({} as AbstractControl)) {
      return this.control.validator({} as AbstractControl).hasOwnProperty('required');
    } else {
      return false;
    }
  }

}
