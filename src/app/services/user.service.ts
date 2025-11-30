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
  private users: User[] = [
    { userId: 1, name: 'Yaron' },
    { userId: 2, name: 'Irit' },
  ];

  private selectedUserSubject = new BehaviorSubject<User>(this.users[0]);
  public selectedUser$: Observable<User> =
    this.selectedUserSubject.asObservable();

  constructor() {}

  getUsers(): User[] {
    return this.users;
  }

  getSelectedUser(): User {
    return this.selectedUserSubject.value;
  }

  setSelectedUser(user: User): void {
    this.selectedUserSubject.next(user);
  }
}
