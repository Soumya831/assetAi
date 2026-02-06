import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceSnapshots } from './instance-snapshots';

describe('InstanceSnapshots', () => {
  let component: InstanceSnapshots;
  let fixture: ComponentFixture<InstanceSnapshots>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstanceSnapshots]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstanceSnapshots);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
