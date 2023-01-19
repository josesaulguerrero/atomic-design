import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { OrganismsModule } from '../organisms/organisms.module';
import { MainComponent } from './main/main.component';

@NgModule({
	declarations: [MainComponent],
	imports: [CommonModule, AtomsModule, MoleculesModule, OrganismsModule],
	exports: [MainComponent],
})
export class PagesModule {}
