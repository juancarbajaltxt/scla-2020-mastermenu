import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FrenchtoastPage } from './frenchtoast.page';

describe('FrenchtoastPage', () => {
  let component: FrenchtoastPage;
  let fixture: ComponentFixture<FrenchtoastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrenchtoastPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FrenchtoastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
