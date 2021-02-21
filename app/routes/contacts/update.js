import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class ContactsUpdateRoute extends Route {

  renderTemplate(controller, model) {
    this.render('contacts.add');
  }
  @action save(contact){
    contact.save().then(()=>{this.transitionTo('contacts');
    });
  }
}
