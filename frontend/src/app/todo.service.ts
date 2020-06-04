import { Injectable } from '@angular/core';
import { Todo } from './interfaces/todo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}
  apiURL: string = 'http://localhost:3000';
  getAllItems(): any {
    return this.http.get(`${this.apiURL}/todo-list`);
  }
  addItem(item: Todo): any {
    return this.http.post(`${this.apiURL}/todo-list`, item);
  }
  deleteItem(id: number): any {
    return this.http.delete(`${this.apiURL}/todo-list/${id}`);
  }
  updateItem(id: number, item: Todo): any {
    return this.http.put(`${this.apiURL}/todo-list/${id}`, item);
  }
}
