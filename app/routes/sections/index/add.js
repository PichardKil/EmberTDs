import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class SectionsIndexAddRoute extends Route {
  model(){
    return {};
  }

  @action save(data){
    let section = this.store.createRecord('section',data);
    section.save().then(() => this.transitionTo('sections.index'));
  }
}
