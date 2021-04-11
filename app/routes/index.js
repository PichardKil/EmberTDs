import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service userAuth;

  @action login(email, password) {
    this.store
      .query('employee', {
        filter: {
          email: email,
        },
      })
      .then((users) => {
        if (users.length) {
          let user = users.firstObject;
          if (password == user.password) {
            console.log('ok');
            this.userAuth.login(user);
            this.transitionTo('board');
          }
        }
      });
  }
}
