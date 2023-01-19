import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { ChatsComponent } from './chats/chats.component';

@NgModule({
	declarations: [ChatsComponent],
	imports: [CommonModule, MoleculesModule, AtomsModule],
	exports: [ChatsComponent],
})
export class OrganismsModule {}
