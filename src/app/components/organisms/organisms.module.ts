import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { AddContactFormComponent } from './add-contact-form/add-contact-form.component';
import { ChatComponent } from './chat/chat.component';
import { InboxComponent } from './inbox/inbox.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
	declarations: [
		InboxComponent,
		ChatComponent,
		LoginFormComponent,
		AddContactFormComponent,
	],
	imports: [CommonModule, MoleculesModule, AtomsModule, NgbModalModule],
	exports: [
		InboxComponent,
		ChatComponent,
		LoginFormComponent,
		AddContactFormComponent,
	],
})
export class OrganismsModule {}
