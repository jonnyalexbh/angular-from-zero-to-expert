import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../../models';

@Pipe({
  name: 'filterCompleted',
  pure: false
})
export class FilterCompletedPipe implements PipeTransform {

  /**
   * transform
   *
   */
  transform(lists: List[], completed: boolean) {
    return lists.filter(list => {
      return list.completed === completed;
    });
  }

}
