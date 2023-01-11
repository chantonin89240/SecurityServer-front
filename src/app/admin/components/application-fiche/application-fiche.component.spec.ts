import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationFicheComponent } from './application-fiche.component';

describe('ApplicationFicheComponent', () => {
  let component: ApplicationFicheComponent;
  let fixture: ComponentFixture<ApplicationFicheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationFicheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
