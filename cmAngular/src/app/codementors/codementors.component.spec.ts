import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodementorsComponent } from './codementors.component';

describe('CodementorsComponent', () => {
  let component: CodementorsComponent;
  let fixture: ComponentFixture<CodementorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodementorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodementorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
