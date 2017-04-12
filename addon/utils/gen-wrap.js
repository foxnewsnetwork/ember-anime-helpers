import Ember from 'ember';
import isPromise from './is-promise';

const { set, get } = Ember;

const iterateGenerator = (gen, input, handlers, method='next') => {
  const { value, done } = gen[method](input);
  const { onNext, onDone } = handlers;

  if (isPromise(value)) {
    value.then((result) => {
      iterateGenerator(gen, onNext(result), handlers);
    }).catch((error) => {
      iterateGenerator(gen, onNext(error), handlers, 'throw');
    });
  } else if (done) {
    onDone();
  } else {
    iterateGenerator(gen, onNext(value), handlers);
  }
}

const GenWrap = Ember.Object.extend({
  /**
   * Handle to the local generator
   */
  _localGenerator: null,

  /**
   * Becomes true when the generator is done
   */
  isDone: false,
  init() {
    const generator = get(this, '_localGenerator');
    const onNext = (value) => set(this, 'value', value);
    const onDone = () => set(this, 'isDone', true);

    iterateGenerator(generator, null, { onNext, onDone });
  }
});

export default function genWrap(fstar, ...args) {
  const _localGenerator = fstar(...args);
  return GenWrap.create({ _localGenerator });
}