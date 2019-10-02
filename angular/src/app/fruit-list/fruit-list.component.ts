import {Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, ViewChild} from '@angular/core';
import { FruitsService} from '../fruits.service';
import { Fruit } from '../fruit/Fruit';
import { Router } from '@angular/router';
import { DragDrop} from '@angular/cdk/drag-drop';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css'],

})


export class FruitListComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  fruits: Array<Fruit>;
  dataSource = new MatTableDataSource();


  constructor(private fruitsservice: FruitsService, private router: Router) {
  }


  displayedColumns: string[] = ['id', 'name', 'quality', 'action'];



  ngOnInit() {
    this.fruitsservice.getAll().subscribe(data => {
      this.fruits = data;
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
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
        this.dataSource.data = [...this.fruits];
      });
  }

  delete(id) {
    this.fruitsservice.deleteFruit(id).subscribe(() => {
      console.log('deleted fruit');
      this.refresh();
  });
  }

  refresh() {
    this.fruitsservice.getAll().subscribe(data => {
      this.fruits = data;
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      console.log(data);
    }, error => console.error(error));
  }





}



