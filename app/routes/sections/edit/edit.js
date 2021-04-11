import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class SectionsIndexEditEditRoute extends Route {

  model(params){
    return this.store.findRecord('product',params.product_id, {include:'section'})
  }

  @action save(product){
    product.save().then(()=>{
      this.transitionTo('sections.edit')
    });
  }

  renderTemplate() {
    let product = this.modelFor(this.routeName);
    this.render({ outlet: product.id});
  }


}
