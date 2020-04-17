import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExistenciasPage } from './existencias.page';

describe('ExistenciasPage', () => {
  let component: ExistenciasPage;
  let fixture: ComponentFixture<ExistenciasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistenciasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExistenciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
