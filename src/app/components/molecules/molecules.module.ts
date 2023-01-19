import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AtomsModule } from '../atoms/atoms.module';
import { ChatPreviewComponent } from './chat-preview/chat-preview.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
	declarations: [SearchBarComponent, ChatPreviewComponent],
	imports: [CommonModule, AtomsModule],
	exports: [SearchBarComponent, ChatPreviewComponent],
})
export class MoleculesModule {}
