import { Injectable, ɵConsole } from '@angular/core';

// Services
import { ConnectionUtilsService } from '../../utils/connection-utils.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // Paths
  USERS: string = "users/"

  constructor(private db: ConnectionUtilsService) { }

  toCreatePlayer() {
    this.db.database().child(this.USERS).child("qGxnAaYA0kX3X3OrTHHYTEJoyXE2/").set({
      username: "HNT3",
      email: "dinhocmenezes@hotmail.com"
    });
  }

  toVerifyUserToken(token: string): any {
    this.db.database().child(this.USERS).on('value', (snapshot) => {
      const users = snapshot.val();

      for (const uid in users) {
        if (uid == token) {
          return true;
        } else {
          return false;
        }
      }
    });
  }

}
