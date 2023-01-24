import { Component, EventEmitter, Input, Output } from '@angular/core';

import { AuthPlatform } from '../../atoms/auth-button/auth-button.component';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
	@Input()
	public authPlatforms!: AuthPlatform[];

	@Output()
	public login: EventEmitter<string>;

	public constructor() {
		this.login = new EventEmitter();
	}
}
