import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserSvcService } from '../user-svc.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  id: number;
  userDetail: any = {};
  loading: boolean;

  public constructor(private route: ActivatedRoute, private router: Router, public _userSvc: UserSvcService) {}

  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe((data) => {
      this._userSvc.getUserDetail(data.id)
      .pipe(finalize(()=> this.loading = false))
      .subscribe((res) => {
        this.userDetail = res.data;
      });
    });
  }
}
