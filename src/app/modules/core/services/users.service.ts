import { from, map, Observable, of, switchMap } from 'rxjs';

import { Injectable } from '@angular/core';
import { Auth, User as FirebaseUser } from '@angular/fire/auth';
import { collectionData, CollectionReference, Firestore, getDocs } from '@angular/fire/firestore';
import { collection, doc, query, setDoc, where } from '@firebase/firestore';

import { User } from '../models/user.model';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	private _user: User | null = null;

	private readonly _usersCollection: CollectionReference;

	public get user(): User {
		return this.mapFirebaseUserCredentials(this._auth.currentUser!);
	}

	public syncedUser(): Promise<User | null> {
		return this.findUserByEmail(this._auth.currentUser?.email!);
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
			chats: [],
		};
	}

	public saveChanges(user: User): void {
		const userRef = doc(this._usersCollection, user.id);
		setDoc(userRef, user);
	}

	public findUserByEmail(email: string): Promise<User | null> {
		const findQuery = query(this._usersCollection, where('email', '==', email));
		const results = getDocs(findQuery);

		return results.then((documents) => {
			return (documents.docs.at(0)?.data() as User) || null;
		});
	}

	public findUserById(id: string): Promise<User | null> {
		const findQuery = query(this._usersCollection, where('id', '==', id));
		const results = getDocs(findQuery);

		return results.then((documents) => {
			return (documents.docs.at(0)?.data() as User) || null;
		});
	}

	public findUserByEmailAndListenToChanges(
		email: string,
	): Observable<User | null> {
		const findQuery = query(this._usersCollection, where('email', '==', email));
		const results = collectionData(findQuery);

		return results.pipe(
			map((users) => {
				return (users.at(0) as User) || null;
			}),
		);
	}
}
