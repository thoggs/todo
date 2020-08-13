import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemakeComponent } from './remake.component';

describe('RemakeComponent', () => {
  let component: RemakeComponent;
  let fixture: ComponentFixture<RemakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
