import Ember from 'ember';
const { isPresent, typeOf } = Ember;

const isPromise = (x) => isPresent(x) && 
  typeOf(x.then) === 'function' && 
  typeOf(x.catch) === 'function';

export default isPromise;