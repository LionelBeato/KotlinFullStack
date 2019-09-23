import { Component, OnInit } from '@angular/core';
import { FruitsService} from '../fruits.service'

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css']
})
export class FruitListComponent implements OnInit {

  fruits:Array<any>;

  constructor(private fruitsservice: FruitsService) {
  }

  
  ngOnInit() {
    this.fruitsservice.getAll().subscribe(data => {
      this.fruits = data;
      console.log(data);
    }, error => console.error(error));
  }
  
  }
