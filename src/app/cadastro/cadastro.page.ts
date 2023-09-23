import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CadastroService } from '../shared/cadastro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  bookingForm: FormGroup;

  constructor(
    private aptService: CadastroService,
    private router: Router,
    public fb: FormBuilder

  ) { }

  ngOnInit() {
    this.bookingForm = this.fb.group({
      nome: [''],
      email: [''],
      telefone: [''],
      valor: [''],
    });
  }

  formSubmit() {
    if (!this.bookingForm.valid) {
      return false;
    } else {
      return this.aptService
        .createBooking(this.bookingForm.value)
        .then((res) => {
          console.log(res);
          this.bookingForm.reset();
          this.router.navigate(['/cadastro']);
        })
        .catch((error) => console.log(error));
    }
  }

}

