import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(
    private firestore: AngularFirestore
  ) {}
  //Crea un nuevo articulo
  public createArticulo(data: {nombre: string, url: string}) {
    return this.firestore.collection('articulos').add(data);
  }
  //Obtiene un articulo
  public getArticulo(documentId: string) {
    return this.firestore.collection('articulos').doc(documentId).snapshotChanges();
  }
  //Obtiene todos los articulos
  public getArticulos() {
    return this.firestore.collection('articulos').snapshotChanges();
  }
  //Actualiza un articulo
  public updateArticulo(documentId: string, data: any) {
    return this.firestore.collection('articulos').doc(documentId).set(data);
  }
}