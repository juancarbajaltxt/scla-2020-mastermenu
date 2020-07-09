import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ingredients1Page } from './ingredients1.page';

describe('Ingredients1Page', () => {
  let component: Ingredients1Page;
  let fixture: ComponentFixture<Ingredients1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ingredients1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ingredients1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
