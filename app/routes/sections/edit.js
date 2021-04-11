import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class SectionsEditRoute extends Route {

  model(params) {
    return this.store.findRecord('section', params.section_id, {include : 'products'})
  }

  @action delete(product, section) { //détruit définitivement
    product.destroyRecord();
    this.transitionTo('sections.edit',section.id);
  }

  @action edit(id_section, id_product) {
    this.transitionTo('sections.edit.edit',id_section,id_product);
  }



}
