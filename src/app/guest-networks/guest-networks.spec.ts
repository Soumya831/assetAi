import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestNetworks } from './guest-networks';

describe('GuestNetworks', () => {
  let component: GuestNetworks;
  let fixture: ComponentFixture<GuestNetworks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestNetworks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestNetworks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
