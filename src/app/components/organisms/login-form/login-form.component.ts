import { AuthenticationService } from 'src/app/modules/core/services/authentication.service';

import { Component } from '@angular/core';

import { AuthPlatform } from '../../atoms/auth-button/auth-button.component';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
	public readonly googlePlatform: AuthPlatform;

	public constructor(private readonly authService: AuthenticationService) {
		this.googlePlatform = {
			iconSrc: 'https://i.postimg.cc/vHSLb94W/image.png',
			name: 'Google',
		};
	}

	public signInWithGoogle(): void {
		this.authService.signInWithGoogle().subscribe((credentials) => {
			console.log(credentials);
		});
	}
}
