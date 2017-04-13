import Ember from 'ember';
import wrapGenerator from '../utils/gen-wrap';

export default Ember.Helper.extend({
  compute([fstar, ...args]) {
    return wrapGenerator(fstar, ...args);
  }
});
