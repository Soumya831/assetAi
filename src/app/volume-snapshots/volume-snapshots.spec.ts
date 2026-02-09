import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeSnapshots } from './volume-snapshots';

describe('VolumeSnapshots', () => {
  let component: VolumeSnapshots;
  let fixture: ComponentFixture<VolumeSnapshots>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolumeSnapshots]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolumeSnapshots);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
