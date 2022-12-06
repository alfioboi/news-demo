import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotiziaComponent } from './notizia.component';

describe('NotiziaComponent', () => {
  let component: NotiziaComponent;
  let fixture: ComponentFixture<NotiziaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotiziaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotiziaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
