
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import Abstractroute from './abstractroute';

export default class MyOrdersRoute extends Abstractroute {

  @service moment;
  beforeModel() {
    this.moment.updateLocale('fr');
  }

  model(params) {
    return this.store.findRecord('order', params.order_id, {include : 'orderdetails.product'});
  }

  @action prepare(order) {
    order.get('orderdetails').forEach((od)=>{
      od.set('preprared',true);
    });
    order.status = "created";
    this.transitionTo('myOrders',order.id);
    console.log("created");
  }

}
