import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateClient, Client } from 'aws-amplify/api';


@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {

  public client: Client;

  constructor(){
    this.client = generateClient()
  }

}
