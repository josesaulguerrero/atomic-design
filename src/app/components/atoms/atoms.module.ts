import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { IconComponent } from './icon/icon.component';
import { TextInputComponent } from './text-input/text-input.component';
import { TitleComponent } from './title/title.component';

@NgModule({
	declarations: [IconComponent, TextInputComponent, TitleComponent],
	imports: [CommonModule, ReactiveFormsModule],
	exports: [IconComponent, TextInputComponent],
})
export class AtomsModule {}
