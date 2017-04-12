import Ember from 'ember';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

const { RSVP } = Ember;

const resolveAfter = (value, time=100) => new RSVP.Promise((resolve) => {
  Ember.run.later(() => resolve(value), time);
});

const waitFor = (time) => resolveAfter(null, time);

describe('Integration | Helper | gen wrap', function() {
  setupComponentTest('gen-wrap', {
    integration: true
  });

  it('renders', function(done) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#gen-wrap}}
    //     template content
    //   {{/gen-wrap}}
    // `);
    this.set('inputValue', function*(x) {
      yield x;
      const y = yield resolveAfter(x * 2);
      const z = yield resolveAfter(y * 2);
      return yield z * 2;
    });

    this.render(hbs`{{gen-wrap inputValue 1}}`);

    expect(this.$().text().trim()).to.equal('1');

    waitFor(105)
    .then(() => {
      expect(this.$().text().trim()).to.equal('2');
      return waitFor(105);
    })
    .then(() => {
      expect(this.$().text().trim()).to.equal('4');
      return waitFor(105);
    })
    .then(() => {
      expect(this.$().text().trim()).to.equal('8');
      return waitFor(105);
    })
    .then(() => {
      expect(this.$().text().trim()).to.equal('8');
      done();
    });
  });
});

