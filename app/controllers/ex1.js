import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

const MAX = 100;

export default class Ex1Controller extends Controller {
  @tracked count = 0;
  @tracked content = '';
  @tracked info = '';

  @action
  clear() {
    this.content = '';
    this.info = '';
  }
  @action
  save() {
    if (this.content.length !== 0) this.info = 'Note Sauvegardée';
  }
  @action
  update() {
    this.info = 'Note Modifiée';
  }

  get size() {
    return MAX - this.content.length;
  }
  get style() {
    let text = '';
    if (this.size < 10) text = 'alert-danger';
    else if (this.size < 20) text = 'alert-warning';
    else text = 'alert-primary';
    return text;
  }
}
