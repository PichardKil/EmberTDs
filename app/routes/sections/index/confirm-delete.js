import Route from '@ember/routing/route';
import { action } from '@ember/object';
import RSVP from 'rsvp';

export default class SectionsIndexConfirmDeleteRoute extends Route {

  model(params) {
    return this.store.findRecord('section', params.section_id, {include : 'products'})
  }

  //méthode asynchrone de suppression des produits de la section,
  //dans laquelle la suppression des produits est bloquante.
  //Cette méthode retournera une promise, dans laquelle il sera possible de supprimer la section.
  async deleteProducts(products) {
    while (products.firstObject) {
      let p = products.firstObject;
      await p.destroyRecord();
    }
  }
  @action delete(section) {
    this.deleteProducts(section.products).then(() => {
      section.destroyRecord();
    });
    this.transitionTo('sections.index');
  }


}
