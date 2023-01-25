import { from, map, Observable, tap } from 'rxjs';

import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, UserCredential } from '@angular/fire/auth';

import { User } from '../models/user.model';
import { UserService } from './users.service';

@Injectable({
	providedIn: 'root',
})
export class AuthenticationService {
	public constructor(
		private readonly auth: Auth,
		private readonly _userService: UserService,
	) {}

	public signInWithGoogle(): Observable<User> {
		return from(signInWithPopup(this.auth, new GoogleAuthProvider())).pipe(
			map(({ user }) => this._userService.mapFirebaseUserCredentials(user)),
			tap((user) => this._userService.setUser(user)),
		);
	}
}
