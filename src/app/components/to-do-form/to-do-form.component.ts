import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../../services/to-do.service';
import { ToDoModel } from '../../type/toDoModel';
import { MessageService } from 'src/app/message.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.scss']
})
export class ToDoFormComponent implements OnInit {

  toDoObservable: Observable<Array<ToDoModel>>;
  toDoTitle: string;

  constructor(
    private toDoService: ToDoService,
    public messageService: MessageService
  ) { }

  ngOnInit() {
    this.toDoObservable = this.toDoService.inCompleteToDoList();
  }

  updateToDoHandler (toDo: ToDoModel) {
    this.toDoService.update(toDo)
      .subscribe((isToDoUpdated) => {
        if (isToDoUpdated) {
          this.toDoObservable = this.toDoService.inCompleteToDoList();
        }
      });
  }

  saveToDo () {
    if (this.toDoTitle) {
      this.toDoService.save(new ToDoModel(this.toDoTitle, false))
        .subscribe((isToDoSaved) => {
          if (isToDoSaved) {
            this.toDoTitle = '';
            this.toDoObservable = this.toDoService.inCompleteToDoList();
          }
        });
    }
  }
}
