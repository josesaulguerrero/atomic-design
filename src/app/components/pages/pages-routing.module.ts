import { NgModule } from '@angular/core';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'auth/login',
			},
			{
				path: 'chat',
				component: MainComponent,
				...canActivate(() => redirectUnauthorizedTo('auth/login')),
			},
			{
				path: 'auth/login',
				component: LoginComponent,
				...canActivate(() => redirectLoggedInTo('chat')),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PagesRoutingModule {}
