import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertracksComponent } from './usertracks.component';

describe('UsertracksComponent', () => {
  let component: UsertracksComponent;
  let fixture: ComponentFixture<UsertracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsertracksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsertracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
