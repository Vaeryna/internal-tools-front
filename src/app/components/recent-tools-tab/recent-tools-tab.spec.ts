import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentToolsTab } from './recent-tools-tab';

describe('RecentToolsTab', () => {
  let component: RecentToolsTab;
  let fixture: ComponentFixture<RecentToolsTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentToolsTab],
    }).compileComponents();

    fixture = TestBed.createComponent(RecentToolsTab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
