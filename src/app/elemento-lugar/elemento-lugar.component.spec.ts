import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementoLugarComponent } from './elemento-lugar.component';

describe('ElementoLugarComponent', () => {
  let component: ElementoLugarComponent;
  let fixture: ComponentFixture<ElementoLugarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementoLugarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElementoLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
