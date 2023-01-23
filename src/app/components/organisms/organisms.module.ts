import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { InboxComponent } from './inbox/inbox.component';

@NgModule({
	declarations: [InboxComponent],
	imports: [CommonModule, MoleculesModule, AtomsModule],
	exports: [InboxComponent],
})
export class OrganismsModule {}
