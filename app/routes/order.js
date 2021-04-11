import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';

export default class OrderRoute extends Route {
  @service userAuth;

  model(params) {
    let user = this.userAuth.user;
    if (user) {
      var retour = RSVP.hash({
        orders: this.store.query('order', {
          filter: { idEmployee: user.id },
          include: 'orderdetails',
        }),
        employee: user,
      });
      console.log(retour);
      return retour;
    }
  }
}
