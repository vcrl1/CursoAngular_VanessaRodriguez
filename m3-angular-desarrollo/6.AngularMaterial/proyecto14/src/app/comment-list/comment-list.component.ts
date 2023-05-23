import { Component, OnInit } from '@angular/core';
import { CommentService } from '../services/comment.service';
import { IComment } from '../models/comment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'email', 'name', 'actions']
  comments: IComment[] = []

  //Para llamar al constructor en el componente:
  constructor(private commentService: CommentService, 
    private router:  Router) { }  //Se añade router dentro del constructor para que funcione abajo.

  ngOnInit(): void {
    this.commentService.findAll().subscribe(data => this.comments = data)
  }

  // Enrutamos la visualización de un comentario 
  viewComment(comment: IComment){
    this.router.navigate(['/comments', comment.id]) //te lleva al comentario:  /comments/id
  }
}
