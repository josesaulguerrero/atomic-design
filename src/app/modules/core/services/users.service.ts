import { Injectable } from '@angular/core';
import { Auth, User as FirebaseUser } from '@angular/fire/auth';

import { User } from '../models/user.model';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	private _user: User | null = null;

	private isAuthenticated(): boolean {
		return !!this._user;
	}

	public get user() {
		return (
			this._user || this.mapFirebaseUserCredentials(this._auth.currentUser!)
		);
	}

	public constructor(private readonly _auth: Auth) {}

	public setUser(user: User) {
		this._user = user;
	}

	public mapFirebaseUserCredentials(user: FirebaseUser): User {
		return {
			id: user.uid,
			name: user.displayName!,
			email: user.email!,
			avatarUrl:
				user.photoURL ||
				'https://i.postimg.cc/KjcdKNPx/blank-profile-circle.png',
		};
	}
}
