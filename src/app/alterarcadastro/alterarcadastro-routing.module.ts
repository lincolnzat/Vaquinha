import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlterarcadastroPage } from './alterarcadastro.page';

const routes: Routes = [
  {
    path: '',
    component: AlterarcadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlterarcadastroPageRoutingModule {}
