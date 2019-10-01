import {Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy} from '@angular/core';
import { FruitsService} from '../fruits.service';
import { Fruit } from '../fruit//Fruit';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { DragDrop} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css'],

})
export class FruitListComponent implements OnInit {

  fruits: Array<Fruit>;


  constructor(private fruitsservice: FruitsService, private router: Router, private ref: ChangeDetectorRef) {
  }


  ngOnInit() {
    this.fruitsservice.getAll().subscribe(data => {
      this.fruits = data._embedded.fruits;
      console.log(data);
    }, error => console.error(error));
  }

  add(name: string, quantity: number): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.fruitsservice.postFruit({name, quantity} as Fruit)
      .subscribe(fruit => {
        this.fruits.push(fruit);
      });
  }

}



