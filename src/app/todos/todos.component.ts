import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateClient, type Client } from 'aws-amplify/api';
// import { Schema } from '../../../amplify/data/resource';


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
