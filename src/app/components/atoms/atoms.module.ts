import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ClickableIconComponent } from './clickable-icon/clickable-icon.component';
import { IconComponent } from './icon/icon.component';
import { InputLabelComponent } from './input-label/input-label.component';
import { TextInputComponent } from './text-input/text-input.component';
import { TextComponent } from './text/text.component';
import { TitleComponent } from './title/title.component';

@NgModule({
	declarations: [
		IconComponent,
		TextInputComponent,
		TitleComponent,
		TextComponent,
		ClickableIconComponent,
		InputLabelComponent,
	],
	imports: [CommonModule, ReactiveFormsModule],
	exports: [
		IconComponent,
		TextInputComponent,
		TitleComponent,
		TextComponent,
		ClickableIconComponent,
		InputLabelComponent,
	],
})
export class AtomsModule {}
