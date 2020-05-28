import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardComponent } from './user-card.component';
import { By } from '@angular/platform-browser';

describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    component.user = {
      first_name: 'Shashank',
      last_name: 'Vivek',
      avatar: 'image.jpg',
      email: 'test@test.com',
      id: 1,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have user name', () => {
    const el = fixture.debugElement.query(By.css('.name')).nativeElement;
    expect(el.innerHTML.trim()).toBe('Shashank Vivek');
  });
  it('should have user name', () => {
    const el = fixture.debugElement.query(By.css('a')).nativeElement;
    expect(el.innerHTML.trim()).toBe('test@test.com');
  });
});
