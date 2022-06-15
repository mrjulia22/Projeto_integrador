import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSobreNosComponent } from './component-sobre-nos.component';

describe('ComponentSobreNosComponent', () => {
  let component: ComponentSobreNosComponent;
  let fixture: ComponentFixture<ComponentSobreNosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentSobreNosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentSobreNosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
