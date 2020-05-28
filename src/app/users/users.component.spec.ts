import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { UserCardComponent } from '../user-card/user-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { UserSvcService } from '../user-svc.service';
import { UserServiceStub } from '../stubs/user-svc.stub.service';
import { PaginatorComponent } from '../paginator/paginator.component';
import { By } from '@angular/platform-browser';

@Component({
  template: '',
})
class DummyComponent {}

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([{ path: '', component: DummyComponent }])],
      declarations: [UsersComponent, SpinnerComponent, UserCardComponent, DummyComponent, PaginatorComponent],
      providers: [{ provide: UserSvcService, useClass: UserServiceStub }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 cards', () => {
    const elements = fixture.debugElement.queryAll(By.css('app-user-card'));
    expect(elements.length).toBe(3);
  });

  it('should have pagination component',()=>{
    const ele = fixture.debugElement.queryAll(By.css('app-paginator'));
    expect(ele.length).toBe(1);
  })
});
