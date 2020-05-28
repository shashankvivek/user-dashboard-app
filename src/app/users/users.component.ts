import { Component, OnInit } from '@angular/core';
import { UserSvcService } from '../user-svc.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users = [];
  totalPages : number;
  activatedPage: number;
  firstCall = true;
  loading: boolean;

  constructor(private _userSvc: UserSvcService) {}

  ngOnInit() {
    this.loading = true;
    this.getUserList(1);
  }

  getUserList(pageNo: number) {
    this.activatedPage = pageNo;
    this._userSvc
      .getUserList(pageNo)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((res) => {
        this.users = res.data;
        if (this.firstCall) {
          this.totalPages = res.total_pages;
          this.firstCall = false;
        }
      });
  }

  pageChanged(event) {
    this.getUserList(event);
  }
}
