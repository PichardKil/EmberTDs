import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class SectionsIndexRoute extends Route {
  model() {
    return this.store.findAll('section', { include: 'products' });
  }

}
