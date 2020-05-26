import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultadoPorSupermercadoPage } from './resultado-por-supermercado.page';

describe('ResultadoPorSupermercadoPage', () => {
  let component: ResultadoPorSupermercadoPage;
  let fixture: ComponentFixture<ResultadoPorSupermercadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadoPorSupermercadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultadoPorSupermercadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
