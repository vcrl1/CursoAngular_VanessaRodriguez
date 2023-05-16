import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  users: IUser[] = []
  error:boolean=false
  constructor(private userService: UserService) { }
  ngOnInit(): void {

//Opción 1 : función next simple:
//this.userService.findAll().subscribe( data=> this.users=data.body ??[])

//Opción 2: función next bloque{}
  //   this.userService.findAll().subscribe(data => {
  //     console.log(data);
  //     console.log(data.status);
  //     console.log(data.body);
  //     this.users = data.body ?? [];
  //   })
  // }

  /* 
  
//Opción 3: CON FUNCIONES 
    --NEXT obligatorio 
    --ERROR y COMPLETE opcional

    this.userService.findAll().subscribe(
    next: (data: HttpResponse<IUser[]>) => this.users=data.body ??[],
    error: (err:Error)=> console.error("Se ha producido un error"), 
    complete:()=> console.log('findAll completado')
    }) 

//Opción 4: funciones con bloques 
this.userService.findAll().subscribe({
    next: (data: HttpResponse<IUser[]>) =>{console.log(data.status),
    this.users=data.body ??[]
    },
    error: (err:Error)=> {console.error('Error: '+err.message), 
    this.error=true;
    },
    complete:()=> console.log('findAll completado')
    })
  }

showError(err:Error){
  this.error=err.message;
  setTimeout(()=>this.error=" ", 5000)}
    */

}
}
