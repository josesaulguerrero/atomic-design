import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MoleculesModule } from '../molecules/molecules.module';
import { ChatsComponent } from './chats/chats.component';

@NgModule({
	declarations: [ChatsComponent],
	imports: [CommonModule, MoleculesModule],
	exports: [ChatsComponent],
})
export class OrganismsModule {}
