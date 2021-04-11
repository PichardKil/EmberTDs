import AbstractrouteRoute from './abstractroute';
import RSVP from 'rsvp';

import { inject as service } from '@ember/service';

export default class BoardRoute extends AbstractrouteRoute {
  @service userAuth;
  @service moment;
  beforeModel() {
    this.moment.updateLocale('fr');
  }
  model() {
    let user = this.userAuth.user;
    if (user) {
      var retour = RSVP.hash({
        orders: this.store.query('order', {
          filter: { idEmployee: user.id },
          include: 'orderdetails',
        }),
        employee: user,
      });
      return retour;
    }
  }

}
