import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '../models/users.response.model';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  totalPageArr: number[] = [];
  @Input() activePage: number;
  @Output() pageChanges = new EventEmitter();

  @Input()
  set totalPages(data: number) {
    for (let i = 1; i <= data; i++) {
      this.totalPageArr.push(i);
    }
  }
  constructor() {}

  pagerSelected(page: number) {
    this.pageChanges.emit(page);
  }

  goToPreviousPage() {
    if (this.activePage > 1) {
      this.activePage--;
      this.pageChanges.emit(this.activePage);
    }
  }

  goToNextPage() {
    if (this.activePage < this.totalPageArr.length) {
      this.activePage++;
      this.pageChanges.emit(this.activePage);
    }
  }
}
