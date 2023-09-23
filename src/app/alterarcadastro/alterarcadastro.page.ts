import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {CadastroService} from '../shared/cadastro.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-alterarcadastro',
  templateUrl: './alterarcadastro.page.html',
  styleUrls: ['./alterarcadastro.page.scss'],
})
export class AlterarcadastroPage implements OnInit {
//Variáveis para a edição
updateCadastroForm: FormGroup;
id: any;
constructor(private aptService: CadastroService,
  private actRoute: ActivatedRoute,
  private router: Router,
  public fb: FormBuilder
  ) {
    this.id=this.actRoute.snapshot.paramMap.get('id')
    this.aptService.getBooking(this.id).valueChanges().subscribe(res=>{
      this.updateCadastroForm.setValue(res);
    })
   }

   ngOnInit() {
    this.updateCadastroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ],
      ],
      telefone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      valor:  ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
      
  }

  updateForm() {
    if(!this.updateCadastroForm.valid){
      return false;
    }
    else {
      return this.aptService.updateBooking(this.id, this.updateCadastroForm.value).then(()=>{
        this.router.navigate(['/doacoes']);
      })
      .catch (error=>console.log(error));
    }
  }
}



