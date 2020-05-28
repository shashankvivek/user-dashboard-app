import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorComponent } from './paginator.component';
import { By } from '@angular/platform-browser';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaginatorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
    component.totalPageArr = [1, 2, 3, 4];
    component.activePage = 2;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 4 page number blocks', () => {
    const ele = fixture.debugElement.queryAll(By.css('.pager'));
    expect(ele.length).toBe(4);
  });

  it('clicking on Previous page btn should decrease page number and emit event', () => {
    spyOn(component.pageChanges, 'emit').and.callThrough();
    const ele = fixture.debugElement.nativeElement.querySelector('#prev-btn');
    ele.click();
    expect(component.activePage).toBe(1);
    expect(component.pageChanges.emit).toHaveBeenCalledWith(1);
  });
  it('clicking on Next page btn should increase page number and emit event', () => {
    spyOn(component.pageChanges, 'emit').and.callThrough();
    const ele = fixture.debugElement.nativeElement.querySelector('#next-btn');
    ele.click();
    expect(component.activePage).toBe(3);
    expect(component.pageChanges.emit).toHaveBeenCalledWith(3);
  });
});
