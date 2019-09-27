import { Component, OnInit } from '@angular/core';
import { FruitsService} from '../fruits.service';
import { Fruit } from '../fruit//Fruit';
import { DragDrop} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css']
})
export class FruitListComponent implements OnInit {

  fruits:Fruit[];

  constructor(private fruitsservice: FruitsService) {
  }


  ngOnInit() {
    this.fruitsservice.getAll().subscribe(data => {
      this.fruits = data;
      console.log(data);
    }, error => console.error(error));
  }

  add(name:string, quantity:number): void {
    name = name.trim();
    if (!name) { return; }
    this.fruitsservice.postFruit({ name, quantity } as Fruit)
      .subscribe(fruit => {
        this.fruits.push(fruit);
      });
  }



  }
