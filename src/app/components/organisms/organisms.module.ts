import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { ChatComponent } from './chat/chat.component';
import { InboxComponent } from './inbox/inbox.component';

@NgModule({
	declarations: [InboxComponent, ChatComponent],
	imports: [CommonModule, MoleculesModule, AtomsModule],
	exports: [InboxComponent, ChatComponent],
})
export class OrganismsModule {}
