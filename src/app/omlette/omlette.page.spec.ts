import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OmlettePage } from './omlette.page';

describe('OmlettePage', () => {
  let component: OmlettePage;
  let fixture: ComponentFixture<OmlettePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmlettePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OmlettePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
