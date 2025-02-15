import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcuThemeSwitcherComponent } from './vcu-theme-switcher.component';

describe('VcuThemeSwitcherComponent', () => {
  let component: VcuThemeSwitcherComponent;
  let fixture: ComponentFixture<VcuThemeSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcuThemeSwitcherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VcuThemeSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
