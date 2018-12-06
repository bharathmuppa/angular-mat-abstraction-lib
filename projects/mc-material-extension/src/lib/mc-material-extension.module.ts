import { BrowserModule } from '@angular/platform-browser';
import { MatInputTextCurrencyComponent } from './mat-input-text-currency/mat-input-text-currency.component';
import { MatSelectComponent } from './mat-select/mat-select.component';
import { NgModule } from '@angular/core';
import { MatButtonToggleComponent } from './mat-button-toggle/mat-button-toggle.component';
import { BadgeComponent } from './badge/badge.component';
import { MatInputTextComponent } from './mat-input-text/mat-input-text.component';
import { MatInputTextAreaComponent } from './mat-input-text-area/mat-input-text-area.component';
import { MatDatePickerComponent } from './mat-date-picker/mat-date-picker.component';
import {
    MatSelect,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatChipsModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatBadgeModule
} from '@angular/material';
import { ObjectComponent } from './object/object.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        BadgeComponent,
        MatButtonToggleComponent,
        MatDatePickerComponent,
        MatInputTextComponent,
        MatInputTextAreaComponent,
        MatInputTextCurrencyComponent,
        MatSelectComponent,
        ObjectComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        ReactiveFormsModule,
        MatInputModule,
        MatIconModule,
        FlexLayoutModule,
        MatTooltipModule,
        MatChipsModule,
        MatToolbarModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatSelectModule,
        MatDatepickerModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatButtonToggleModule,
        MatBadgeModule
    ],
    exports: [
        BadgeComponent,
        MatButtonToggleComponent,
        MatDatePickerComponent,
        MatInputTextComponent,
        MatInputTextAreaComponent,
        MatInputTextCurrencyComponent,
        MatSelectComponent,
        ObjectComponent
    ],
    providers: []
})
export class McMaterialExtensionModule {

}
