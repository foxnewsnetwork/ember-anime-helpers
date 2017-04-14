import Ember from 'ember';
import wrapGenerator from '../utils/gen-wrap';

/**
 * Wraps a generator function, eagering pulling out its value and also
 * invoking its actions if given.
 * 
 * For example:
 * 
 * <div>
 *  {{gen-wrap fstar 1 2 onNext=(action 'doSomething')}}
 * </div>
 * 
 * will automatically update the values
 * 
 * @param {ES6 Generator Function} fstar - the generator you'd like to wrap
 * @param {Obj of Callbacks} hash - contains the onDone, onNext, and onThrow callbacks
 */
export function genWrap([fstar, ...args], hash) {
  return wrapGenerator(fstar, args, hash);
}

export default Ember.Helper.helper(genWrap);
