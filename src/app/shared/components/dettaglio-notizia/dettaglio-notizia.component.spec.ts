import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioNotiziaComponent } from './dettaglio-notizia.component';

describe('DettaglioNotiziaComponent', () => {
  let component: DettaglioNotiziaComponent;
  let fixture: ComponentFixture<DettaglioNotiziaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettaglioNotiziaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettaglioNotiziaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
