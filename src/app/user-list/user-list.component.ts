import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  names:String[];
  constructor() { 
    this.names=['a1','a2'];
  }

  ngOnInit(): void {
  }

}
