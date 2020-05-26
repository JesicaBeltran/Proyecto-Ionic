import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultadoPorProductoPage } from './resultado-por-producto.page';

describe('ResultadoPorProductoPage', () => {
  let component: ResultadoPorProductoPage;
  let fixture: ComponentFixture<ResultadoPorProductoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadoPorProductoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultadoPorProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
