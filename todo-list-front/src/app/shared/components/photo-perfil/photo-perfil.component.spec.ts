import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoPerfilComponent } from './photo-perfil.component';

describe('PhotoPerfilComponent', () => {
  let component: PhotoPerfilComponent;
  let fixture: ComponentFixture<PhotoPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
