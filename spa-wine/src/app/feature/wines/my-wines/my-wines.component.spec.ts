import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWinesComponent } from './my-wines.component';

describe('MyWinesComponent', () => {
  let component: MyWinesComponent;
  let fixture: ComponentFixture<MyWinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyWinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyWinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
