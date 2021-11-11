import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {
  constructor(private db:AngularFireDatabase) {
   }
   
   create() {
  
      return this.db.list('/users').push(
     {dsdsds:'1'})
   }
   
   private async getuserId() {
    let itemsId=localStorage.getItem('itemId')
    if (itemsId) {
      console.log(itemsId);

      return itemsId;}
     
     let result =await this.create();;
    localStorage.setItem('itemId', result.key);
    console.log(result.key);
    return result.key;

  }

   async item(){
     console.log('kkkkk');
     let itemsId= await this.getuserId();
console.log(itemsId);

      return this.db.list('/users/'+itemsId+'/items/').snapshotChanges();
      }
    async  addItem(item){
        let itemsId=await this.getuserId();
        console.log(item);

        this.db.list('/users/'+itemsId+'/items/').push(item);
      }
      async  delete(item){
    let itemsId=await this.getuserId();

     console.log('jjj;;;;;;;;jjjjj');
     this.db.list('/users/'+itemsId+'/items/'+item).remove()
   }
   getId(){
     return this.db.list('/items/').snapshotChanges()
   }
   
   async edit(){
    let itemsId=await this.getuserId();

     console.log('hhhhhhh')
   }
}
