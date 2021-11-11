import { Component, OnInit, Optional } from '@angular/core';
import { fade, slide, bounsleftani } from '../animation/animation';
import { useAnimation } from '@angular/animations';
import { Observable } from 'rxjs';

import { trigger, state, style, transition, animate, query, animateChild, stagger, group } from '@angular/animations';
import { ItemserviceService } from '../services/itemservice.service';
@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    trigger('todoparent', [
      transition(':enter', [
        group([
          query('h1', [style({ transform: 'translateY(-20px)' }), animate(5000)])
          , query('.list-group-item', stagger(500, [
            style({ backgroundColor: 'green' }), animate(2000)
          ])
          )
        ])
      ])

    ])
    ,
    trigger('change',
      [transition(':enter', [
        useAnimation(bounsleftani,
          { params: { time: '5s' } }
        )])]),
    trigger('new', [
      transition(':enter', [
        style({ backgroundColor: 'magenta' }), animate(2000)

      ]), transition(':leave', [
        style({ transform: 'translateX(-100px)' }), animate(200)
      ])])


  ]
})
export class TodosComponent implements OnInit {
  items$;
  origitem;
  edieItem;
  editli = false;
  add = false;
  showit = false;
  inputItm='';
  constructor(private itemsvr: ItemserviceService) {
  }

  items: string[] = ['study', 'play', 'sport', 'cook', 'tide']
  isnew = false;

  show(state) {
    this.showit = state;

    console.log(state)

  }
  addnew() {
    this.add = true;

  }
  cancelEdit() {
    this.addItem(this.origitem);
this.editli=false;
  }
  cancelAdd() {

    this.showit=false;
  }
 
  addItem(itemInput) {
    this.inputItm='';
    this.edieItem='';
    console.log(itemInput)
    if(itemInput!=""){
      this.itemsvr.addItem(itemInput);

    }
    console.log(this.inputItm)
    this.isnew = !this.isnew;
    this.cancelAdd();
    this.cancelEdit();

  }
  removeItem(item) {
    let index = this.items.indexOf(item);
    this.itemsvr.delete(item);
    this.items.splice(index, 1);
    this.isnew = !this.isnew;
    console.log(item)

  }
  edit(item,key) {
    console.log(item);
    this.editli = true;
    this.edieItem=item;
    this.origitem=item;
    this.removeItem(key);
  }
  async ngOnInit() {
    (await this.itemsvr.item()).subscribe(item => {
      console.log(item);
      this.items$ = item;

    });
    console.log(this.items$)
  }

}
