import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailComponent } from './user-detail.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { of, Observable, from } from 'rxjs';
import { UserSvcService } from '../user-svc.service';
import { UserServiceStub } from '../stubs/user-svc.stub.service';
import { By } from '@angular/platform-browser';

@Component({ template: '' })
class DummyComponent {}

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([{ path: '', component: DummyComponent }]), HttpClientModule],
      declarations: [UserDetailComponent, SpinnerComponent, DummyComponent],
      providers: [{ provide: ActivatedRoute, useValue: { params: of({ id: 1 }) } }, { provide: UserSvcService, useClass: UserServiceStub }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call "getUserDetail()" on ngOnInit', () => {
    spyOn(component._userSvc, 'getUserDetail').and.callThrough();
    component.ngOnInit();
    expect(component._userSvc.getUserDetail).toHaveBeenCalledWith(1);
  });

  it('should have user name', () => {
    const el = fixture.debugElement.query(By.css('.name')).nativeElement;
    expect(el.innerHTML.trim()).toBe('George Bluth');
  });

  it('should have user name', () => {
    const el = fixture.debugElement.query(By.css('.email')).nativeElement;
    expect(el.innerHTML.trim()).toBe('george.bluth@reqres.in');
  });
});
