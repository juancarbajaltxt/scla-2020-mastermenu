import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpaghettiPage } from './spaghetti.page';

describe('SpaghettiPage', () => {
  let component: SpaghettiPage;
  let fixture: ComponentFixture<SpaghettiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaghettiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpaghettiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
