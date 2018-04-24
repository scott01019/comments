import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsTopBarComponent } from './comments-top-bar.component';

describe('CommentsTopBarComponent', () => {
  let component: CommentsTopBarComponent;
  let fixture: ComponentFixture<CommentsTopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsTopBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
