import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  userId: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private preDefinedUsers: User[] = [
    { userId: 1, name: 'Yaron' },
    { userId: 2, name: 'Irit' },
  ];

  private currentLoggedInUserSubject = new BehaviorSubject<User>(
    this.preDefinedUsers[0]
  );
  public currentLoggedInUser$: Observable<User> =
    this.currentLoggedInUserSubject.asObservable();
  constructor() {}

  getUsers(): User[] {
    return this.preDefinedUsers;
  }

  getCurrentLoggedInUser(): User {
    return this.currentLoggedInUserSubject.value;
  }

  setCurrentLoggedInUser(user: User): void {
    this.currentLoggedInUserSubject.next(user);
  }
}
