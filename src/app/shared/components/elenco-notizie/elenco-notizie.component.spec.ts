import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoNotizieComponent } from './elenco-notizie.component';

describe('ElencoNotizieComponent', () => {
  let component: ElencoNotizieComponent;
  let fixture: ComponentFixture<ElencoNotizieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElencoNotizieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElencoNotizieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
