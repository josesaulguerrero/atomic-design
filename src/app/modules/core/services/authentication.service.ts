import { from, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, UserCredential } from '@angular/fire/auth';

@Injectable({
	providedIn: 'root',
})
export class AuthenticationService {
	public constructor(private readonly auth: Auth) {}

	public signInWithGoogle(): Observable<UserCredential> {
		return from(signInWithPopup(this.auth, new GoogleAuthProvider()));
	}
}
