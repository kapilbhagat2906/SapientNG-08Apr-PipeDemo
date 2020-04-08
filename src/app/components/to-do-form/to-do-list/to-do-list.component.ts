import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToDoModel } from '../../../type/toDoModel';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {
  @Input()
  toDoObservable: Observable<Array<ToDoModel>>;

  sortOrder: string;

  sortForm: FormGroup = new FormGroup({
    sortOrder: new FormControl("ASC")
  });

  @Output()
  updateToDoHandler = new EventEmitter();

  updateToDo(toDo: ToDoModel) {
    if (toDo) {
      this.updateToDoHandler.emit(toDo);
    }
  }

  ngOnInit() {
    this.sortForm.get('sortOrder').valueChanges
      .subscribe((value) => {
        this.sortOrder = value;
      });
  }

}
