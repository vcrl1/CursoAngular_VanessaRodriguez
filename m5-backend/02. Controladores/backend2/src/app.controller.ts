import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { get } from 'http';
import { last } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello2')
  getHello2(): string {
    return 'Hola2 desde nestjs'
  }

  @Get('hello3')
  getHello3(): string {
    return 'Hola3 desde nestjs'
  }
  @Get('hello4')
  getHello4(): number {
    return 100
  }
  //http://localhost:3000/hello5
  @Get('hello5')
  getHello5(): any {
    return [{
      id: 1,
      fullName: 'HelloMan',
      age: 25,
    },
    {
      id: 2,
      fullName: 'Hello1',
      age: 25,
    },
    {
      id: 3,
      fullName: 'Hello2',
      age: 25,
    },
    {
      id: 4,
      fullName: 'Hello3',
      age: 25,
    },
    ]
  }

  //URL con parámetros: http://localhost:3000/hello/3
  @Get('hello/:id')
  getHelloById(@Param('id') id: string): any {
    console.log(id);
    return {
      id: id,
      fullName: 'hello',
    }
  }

  //URL con dos parámetros: http://localhost:3000/first-name/Alan/last-name/Sastre

  @Get('first-name/:firstName/last-name/:lastName')
  getFullName(@Param('firstName') firstName: string, @Param('lastName') lastName: string): any {
    console.log(firstName);
    console.log(lastName);
    return {
      fullName: `${firstName} ${lastName}`,
    }
  }

  @Get('hello-param/:id1/:id2')
  getHelloPara(@Param() params:any): void {
    console.log(params.id1);
    console.log(params.id2);
    
  }
}
