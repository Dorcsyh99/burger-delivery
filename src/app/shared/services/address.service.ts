import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Address } from '../models/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  collectionName = 'address';

  constructor(private afs: AngularFirestore) { }

  // CRUD (Create, Read, Update, Delete)

  create(addr: Address) {
    return this.afs.collection<Address>(this.collectionName).doc(addr.id).set(addr);
  }

  getAll() {
    return this.afs.collection<Address>(this.collectionName).valueChanges();
  }

  getById(id: string) {
    return this.afs.collection<Address>(this.collectionName).doc(id).valueChanges();
  }

  update(addr: Address) {
    return this.afs.collection<Address>(this.collectionName).doc(addr.id).set(addr);
  }

  delete(id: string) {
    return this.afs.collection<Address>(this.collectionName).doc(id).delete();
  }
}
