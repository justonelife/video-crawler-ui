import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcuHeaderComponent } from './vcu-header.component';

describe('VcuHeaderComponent', () => {
  let component: VcuHeaderComponent;
  let fixture: ComponentFixture<VcuHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcuHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VcuHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
