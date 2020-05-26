import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerPorSupermercadoPage } from './ver-por-supermercado.page';

describe('VerPorSupermercadoPage', () => {
  let component: VerPorSupermercadoPage;
  let fixture: ComponentFixture<VerPorSupermercadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerPorSupermercadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerPorSupermercadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
