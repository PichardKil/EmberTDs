import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { action } from '@ember/object';

export default class SectionsIndexEditAddProductRoute extends Route {

  model() {
    return RSVP.hash( {
      product: {},
      section: this.modelFor('sections.edit'),
      products: this.store.findAll('product'),
    });
  }

  @action save(data){
    let section = this.modelFor('sections.edit');
    data.section = section;
    let product = this.store.createRecord('product',data);
    product.save().then(() => this.transitionTo('sections.edit',section.id));
  }


}
