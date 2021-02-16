import Route from '@ember/routing/route';
import { datas,promos } from 'tds/data/datas';
import services from 'tds/classes/services';
import { action,set } from '@ember/object';

export default class Ex2Route extends Route {
  promoView=false;

  model() {
    return new services(datas,promos);
  }

  @action toggleActive(serv) {
    set(serv, 'active',!serv.active);
  }

  @action togglePromo() {
    console.log("ok");
    this.promoView=!this.promoView;
    if(!this.promoView){
      this.transitionTo('ex2');
    }
    else{
      this.transitionTo('ex2.promo');
    }
  }


}
