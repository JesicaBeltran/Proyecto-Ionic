import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerPorProductoPage } from './ver-por-producto.page';

describe('VerPorProductoPage', () => {
  let component: VerPorProductoPage;
  let fixture: ComponentFixture<VerPorProductoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerPorProductoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerPorProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
