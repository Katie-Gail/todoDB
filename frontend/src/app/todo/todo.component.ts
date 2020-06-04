import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { TodoService } from '../todo.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todoList: Todo[] = [];
  constructor(private service: TodoService) {}

  ngOnInit(): void {
    this.getAllItems();
  }

  getAllItems() {
    this.service.getAllItems().subscribe((response) => {
      this.todoList = response;
      console.log(response);
    });
  }

  addItem(form: NgForm): void {
    console.log(form.value);
    let todo = form.value;
    todo.completed = false;
    //asynchronous; only capture array after the item has been added
    this.service.addItem(todo).subscribe(() => {
      this.getAllItems();
      form.reset();
    });
  }
  deleteItem(id: number): void {
    this.service.deleteItem(id).subscribe(() => {
      this.getAllItems();
    });
  }
  // updateItem(form: NgForm, item: Todo): void {
  //   let updatedItem = item;
  //   updatedItem.quantity = form.value.quantity;

  //   this.service.updateItem(item.id, updatedItem).subscribe(() => {
  //     this.getAllItems();
  //     // this.showIndex = null;
  //   });
  // }
}
