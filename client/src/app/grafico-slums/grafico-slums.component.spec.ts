import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoSlumsComponent } from './grafico-slums.component';

describe('GraficoSlumsComponent', () => {
  let component: GraficoSlumsComponent;
  let fixture: ComponentFixture<GraficoSlumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoSlumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoSlumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
