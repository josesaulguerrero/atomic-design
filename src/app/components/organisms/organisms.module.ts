import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { ChatComponent } from './chat/chat.component';
import { InboxComponent } from './inbox/inbox.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
	declarations: [InboxComponent, ChatComponent, LoginFormComponent],
	imports: [CommonModule, MoleculesModule, AtomsModule],
	exports: [InboxComponent, ChatComponent, LoginFormComponent],
})
export class OrganismsModule {}
