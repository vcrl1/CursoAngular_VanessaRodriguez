import { Component } from '@angular/core';
import { IUser } from '../user.model';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {
  displayedColums: string[] = ['avatar', 'fullName', 'email', 'actions']
  users: IUser[] = [{
    fullName: "Juan Garcia",
    email: "usuario1@gmail.com",
    bio: "Lorem ipsum dolor asit amet ipsum",
    avatar: "https://ui-avatars.com/api/?name=Juan+Garcia"  //con este link se puede crear la img con las iniciales.
  },
  {
    fullName: "Patricia Martinez",
    email: "usuario2@gmail.com",
    bio: "Lorem ipsum dolor asit amet ipsum",
    avatar: "https://ui-avatars.com/api/?name=Patricia+Martinez"
  },
  {
    fullName: "Antonio Rataplan",
    email: "usuario3@gmail.com",
    bio: "Lorem ipsum dolor asit amet ipsum",
    avatar: "https://ui-avatars.com/api/?name=Antonio+Rataplan"
  },
  {
    fullName: "Lucía Zamora",
    email: "usuario4@gmail.com",
    bio: "Lorem ipsum dolor asit amet ipsum",
    avatar: "/assets/img/user-avatar1.png"
  },
  {
    fullName: "Paco Mer",
    email: "usuario5@gmail.com",
    bio: "Lorem ipsum dolor asit amet ipsum",
    avatar: "/assets/img/user-avatar2.png"
  },]

  viewUser(user: IUser): string { 
    console.log(user.fullName);
    //this.router.navigate
    return user.fullName

  }

  edit(user: IUser): void {
    console.log(user.fullName);
  }

  deleteUser(user: IUser): void {
    console.log(user.fullName);
  }

  create(): void {
    //tendría que llevar al formulario para crear nuevo usuario
  }

  deleteAll(): void {

  }
}
