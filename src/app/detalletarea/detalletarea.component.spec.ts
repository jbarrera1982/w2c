import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalletareaComponent } from './detalletarea.component';

describe('DetalletareaComponent', () => {
  let component: DetalletareaComponent;
  let fixture: ComponentFixture<DetalletareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalletareaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalletareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
