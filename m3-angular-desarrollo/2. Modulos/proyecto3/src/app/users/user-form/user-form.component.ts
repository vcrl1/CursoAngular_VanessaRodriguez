import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent {

  fullName: string = "";

  resetFullName(): void {
    this.fullName = "";
  }
}
