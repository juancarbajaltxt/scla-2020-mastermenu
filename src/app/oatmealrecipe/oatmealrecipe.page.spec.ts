import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OatmealrecipePage } from './oatmealrecipe.page';

describe('OatmealrecipePage', () => {
  let component: OatmealrecipePage;
  let fixture: ComponentFixture<OatmealrecipePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OatmealrecipePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OatmealrecipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
