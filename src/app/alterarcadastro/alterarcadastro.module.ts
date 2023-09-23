import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlterarcadastroPageRoutingModule } from './alterarcadastro-routing.module';

import { AlterarcadastroPage } from './alterarcadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlterarcadastroPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AlterarcadastroPage]
})
export class AlterarcadastroPageModule {}
