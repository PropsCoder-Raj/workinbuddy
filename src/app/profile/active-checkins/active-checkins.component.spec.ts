import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActiveCheckinsComponent } from './active-checkins.component';

describe('ActiveCheckinsComponent', () => {
  let component: ActiveCheckinsComponent;
  let fixture: ComponentFixture<ActiveCheckinsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveCheckinsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActiveCheckinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
