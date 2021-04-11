import Abstractroute from './abstractroute';

export default class SectionRoute extends Abstractroute {
  model() {
    console.log(this.store.findAll('section', { include: 'products' }));
    return this.store.findAll('section', { include: 'products' });
  }
}
