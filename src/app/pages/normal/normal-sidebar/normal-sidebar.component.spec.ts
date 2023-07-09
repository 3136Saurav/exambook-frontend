import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalSidebarComponent } from './normal-sidebar.component';

describe('NormalSidebarComponent', () => {
  let component: NormalSidebarComponent;
  let fixture: ComponentFixture<NormalSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NormalSidebarComponent]
    });
    fixture = TestBed.createComponent(NormalSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
