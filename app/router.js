import EmberRouter from '@ember/routing/router';
import config from 'tds/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('Abstractroute');

  this.route('sections', function() {
    this.route('add');
    this.route('addProduct');
    this.route('delete', function() {
      this.route(':section_id');
    });

    this.route('edit', function() {
      this.route(':section_id', function() {
        this.route('addProduct');

        this.route('edit', function() {
          this.route(':product_id');
        });

        this.route('delete', function() {
          this.route(':product_id');
        });
      });
    });
  });
});
