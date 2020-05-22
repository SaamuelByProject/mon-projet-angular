import { User } from '../models/User.model';
import { Subject } from 'rxjs/Subject';

export class UserService {
  private users: User[] = [
    {
      firstName: 'Samuel',
      lastName: 'Blin',
      email: 'samuel@blin.com',
      drinkPreference: 'Coca',
      hobbies: ['coder', 'café'],
    },
  ];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
