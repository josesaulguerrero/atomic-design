import { map, Observable, tap } from 'rxjs';

import { Injectable } from '@angular/core';
import { Auth, User as FirebaseUser } from '@angular/fire/auth';
import { collectionData, CollectionReference, docData, Firestore } from '@angular/fire/firestore';
import { collection, doc, getDoc, query, setDoc, where } from '@firebase/firestore';

import { User } from '../models/user.model';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	private _user: User | null = null;

	private readonly _usersCollection: CollectionReference;

	private isAuthenticated(): boolean {
		return !!this._user;
	}

	public get user() {
		return (
			this._user || this.mapFirebaseUserCredentials(this._auth.currentUser!)
		);
	}

	public constructor(
		private readonly _auth: Auth,
		private readonly _firestore: Firestore,
	) {
		this._usersCollection = collection(this._firestore, 'users');
	}

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

	public saveChanges(user: User) {
		const userRef = doc(this._usersCollection, user.id);
		return setDoc(userRef, user);
	}

	public userWithEmailExists(email: string) {
		const existsQuery = query(
			this._usersCollection,
			where('email', '==', email),
		);
		const results = collectionData(existsQuery);

		return results.pipe(
			map((users) => users.at(0)),
			map((user) => !!user),
		);
	}
}
