import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { OrganismsModule } from '../organisms/organisms.module';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
	declarations: [MainComponent, LoginComponent],
	imports: [
		CommonModule,
		PagesRoutingModule,
		AtomsModule,
		MoleculesModule,
		OrganismsModule,
	],
	exports: [MainComponent, LoginComponent],
})
export class PagesModule {}
