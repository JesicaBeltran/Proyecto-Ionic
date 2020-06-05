import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerExistenciasPage } from './verAvisos.page';

describe('VerExistenciasPage', () => {
  let component: VerExistenciasPage;
  let fixture: ComponentFixture<VerExistenciasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerExistenciasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerExistenciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
