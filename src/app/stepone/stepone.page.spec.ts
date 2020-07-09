import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SteponePage } from './stepone.page';

describe('SteponePage', () => {
  let component: SteponePage;
  let fixture: ComponentFixture<SteponePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteponePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SteponePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
