import { Component } from '@angular/core';
import { IUser } from '../user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent {

  user: IUser = {
    id: 1,
    fullName: 'Usuario técnico'
  }
}
