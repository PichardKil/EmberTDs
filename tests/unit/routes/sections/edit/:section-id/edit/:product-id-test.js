import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | sections/edit/:section_id/edit/:product_id', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:sections/edit/:section-id/edit/:product-id');
    assert.ok(route);
  });
});
