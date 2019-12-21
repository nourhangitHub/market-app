import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoserviceProvider } from '../../providers/todoservice/todoservice';


@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  datalist=[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: TodoserviceProvider
     ) {
       this.getData();
  }

 getData(){
   return this.service.getData().subscribe(data =>this.datalist = data);
 }

}
