import { AuthPlatform } from 'src/app/components/atoms/auth-button/auth-button.component';
import { AuthenticationService } from 'src/app/modules/core/services/authentication.service';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

	public constructor(
		private readonly _authService: AuthenticationService,
		private readonly _router: Router,
	) {
		this.authPlatforms = [
			{
				iconSrc: 'https://i.postimg.cc/vHSLb94W/image.png',
				name: 'Google',
				onLogin: () => this.signInWithGoogle(),
			},
		];
	}

	public signInWithGoogle(): void {
		this._authService.signInWithGoogle().subscribe((user) => {
			this._router.navigateByUrl('app/chat');
		});
	}

	public onLogin(platformName: string): void {
		this.authPlatforms
			.find((platform) => platform.name === platformName)
			?.onLogin();
	}
}
