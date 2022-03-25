import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutoRenewalHistoryComponent } from './auto-renewal-history.component';

describe('AutoRenewalHistoryComponent', () => {
  let component: AutoRenewalHistoryComponent;
  let fixture: ComponentFixture<AutoRenewalHistoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoRenewalHistoryComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutoRenewalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
