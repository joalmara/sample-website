import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbortronheaderComponent } from './jumbortronheader.component';

describe('JumbortronheaderComponent', () => {
  let component: JumbortronheaderComponent;
  let fixture: ComponentFixture<JumbortronheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumbortronheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbortronheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
