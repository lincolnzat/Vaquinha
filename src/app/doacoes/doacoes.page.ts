import { Component, OnInit } from '@angular/core';
import {CadastroService} from '../shared/cadastro.service';
import {Cadastro} from '../shared/Cadastro';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-doacoes',
  templateUrl: './doacoes.page.html',
  styleUrls: ['./doacoes.page.scss'],
})
export class DoacoesPage implements OnInit {
//Variáveis
Cadastros: any[]


constructor(private aptService: CadastroService,
  public alertController: AlertController
  ) { }

ngOnInit() {
  this.fetchBookings();
  let bookingRes = this.aptService.getBookingList();
  bookingRes.snapshotChanges().subscribe((res) => {
    this.Cadastros=[];
    res.forEach((item)=> {
      let a: any = item.payload.toJSON();
      a['$key']=item.key;
      this.Cadastros.push(a as Cadastro);
      
    });
  });
}

fetchBookings() {
  this.aptService
  .getBookingList()
  .valueChanges()
  .subscribe ((res)=>{
    console.log(res);
  }

  );
}

deleteCadastro(id: any){
  this.alertController.create({
    header: 'Atenção!',
    message:'Excluir o registro?',
    backdropDismiss: false,
    buttons: [{
      text:'Sim',
      handler: ()=>{
      this.aptService.deleteBooking(id)
      }
    },
      {
        text:'Não',
        role:'cancel'
      }]
  })
  .then(alert=>{
    alert.present()
  });
}

}

