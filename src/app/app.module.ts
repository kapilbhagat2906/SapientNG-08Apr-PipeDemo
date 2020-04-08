import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToDoFormComponent } from './components/to-do-form/to-do-form.component';
import { ToDoComponent } from './components/to-do-form/to-do/to-do.component';
import { ToDoListComponent } from './components/to-do-form/to-do-list/to-do-list.component';

import { ToDoService } from './services';
import { MessageService } from './message.service';
import { HttpErrorHandler } from './http-error-handler.service';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToDoFormComponent,
    ToDoComponent,
    ToDoListComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ToDoService,
    MessageService,
    HttpErrorHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
