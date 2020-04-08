import { Pipe, PipeTransform } from '@angular/core';
import { ToDoModel } from '../type/toDoModel';

@Pipe({
    name: "sort"
})
export class SortPipe implements PipeTransform {
    transform(array: Array<ToDoModel>, sortOrder: string = "ASC") {
        if (!array) {
            return array;
        }
        let sortedArray: Array<ToDoModel> = array.sort((first, second) => {
            if (first.title.toLocaleLowerCase() < second.title.toLocaleLowerCase()) {
                return ((sortOrder === "ASC") && -1) || 1;
            } else {
                return ((sortOrder === "ASC") && 1) || -1;
            }

            return 0;
        });

        return sortedArray;
    }
}
