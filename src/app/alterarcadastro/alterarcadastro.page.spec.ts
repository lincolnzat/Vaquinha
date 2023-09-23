import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlterarcadastroPage } from './alterarcadastro.page';

describe('AlterarcadastroPage', () => {
  let component: AlterarcadastroPage;
  let fixture: ComponentFixture<AlterarcadastroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlterarcadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
