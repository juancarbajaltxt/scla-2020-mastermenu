import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ingredients3Page } from './ingredients3.page';

describe('Ingredients3Page', () => {
  let component: Ingredients3Page;
  let fixture: ComponentFixture<Ingredients3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ingredients3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ingredients3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
