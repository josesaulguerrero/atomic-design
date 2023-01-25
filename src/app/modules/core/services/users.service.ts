import { Injectable } from '@angular/core';

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
		return this._user;
	}

	public constructor() {}

	public setUser(user: User): void {
		this._user = user;
	}
}
