import { Injectable } from '@angular/core';
import { Cadastro } from '../shared/Cadastro';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root',
})
export class CadastroService {

  listCadastrosRef: AngularFireList<any>;
  cadastroRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {
    this.listCadastrosRef = db.list('/cadastro'); //your path api

  }
  // Create
  createBooking(apt: Cadastro) {
    return this.listCadastrosRef.push({
      nome: apt.nome,
      email: apt.email,
      telefone: apt.telefone,
      valor: apt.valor,
    });
  }
  // Get Single
  getBooking(id: string) {
    this.cadastroRef = this.db.object('/cadastro/' + id);
    return this.cadastroRef;
  }
  // Get List
  getBookingList() {
    this.listCadastrosRef = this.db.list('/cadastro');
    return this.listCadastrosRef;
  }
  // Update
  updateBooking(id: any, apt: Cadastro) {
    return this.cadastroRef.update({
      nome: apt.nome,
      email: apt.email,
      telefone: apt.telefone,
      valor: apt.valor,
    });
  }
  // Delete
  deleteBooking(id: string) {
    this.cadastroRef = this.db.object('/cadastro/' + id);
    this.cadastroRef.remove();
  }
}
