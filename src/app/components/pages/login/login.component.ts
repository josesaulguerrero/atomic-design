import { AuthenticationService } from 'src/app/modules/core/services/authentication.service';

import { Component } from '@angular/core';

import { AuthPlatform } from '../../atoms/auth-button/auth-button.component';

type LoginPlatform = AuthPlatform & {
	onLogin: () => void;
};

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
	public authPlatforms: LoginPlatform[];

	public constructor(private readonly authService: AuthenticationService) {
		this.authPlatforms = [
			{
				iconSrc: 'https://i.postimg.cc/vHSLb94W/image.png',
				name: 'Google',
				onLogin: () => this.signInWithGoogle(),
			},
		];
	}

	public signInWithGoogle(): void {
		this.authService.signInWithGoogle().subscribe((credentials) => {
			console.log(credentials);
		});
	}

	public onLogin(platformName: string): void {
		this.authPlatforms
			.find((platform) => platform.name === platformName)
			?.onLogin();
	}
}
