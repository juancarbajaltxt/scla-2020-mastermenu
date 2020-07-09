import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HamsandwichPage } from './hamsandwich.page';

describe('HamsandwichPage', () => {
  let component: HamsandwichPage;
  let fixture: ComponentFixture<HamsandwichPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HamsandwichPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HamsandwichPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
