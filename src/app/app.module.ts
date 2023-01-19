import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoleculesModule } from './components/molecules/molecules.module';
import { CoreModule } from './modules/core/core.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FontAwesomeModule,
		CoreModule,
		MoleculesModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
