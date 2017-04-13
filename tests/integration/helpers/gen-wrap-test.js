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

function * fstar(w) {
  Ember.Logger.warn('w-', w);
  const x = yield w;
  Ember.Logger.warn('x-', x);
  const y = yield resolveAfter(x * 2);
  Ember.Logger.warn('y-', y);
  const z = yield resolveAfter(y * 2);
  Ember.Logger.warn('z-', z);
  const aa = yield resolveAfter(z * 2);
  Ember.Logger.warn('aa-', aa);
  return aa;
};

function setup() {
  this.set('inputValue', fstar);
  this.render(hbs`{{get (gen-wrap inputValue 1) 'value'}}`);
}

describe('Integration | Helper | gen wrap', function() {
  setupComponentTest('gen-wrap', {
    integration: true
  });

  describe('zero', function() {
    it('should immediately have a result on the first run', function() {
      setup.call(this);
      expect(this.$().text().trim()).to.equal('1');
    });
  });
  
  describe('one', function() {
    it('should change on the second yield run', function(done) {
      setup.call(this);
      waitFor(130).then(() => {
        expect(this.$().text().trim()).to.equal('2');
        done();
      });
    });
  });
  
  describe('two', function() {
    it('should change on the third yield run', function(done) {
      setup.call(this);
      waitFor(230).then(() => {
        expect(this.$().text().trim()).to.equal('4');
        done();
      });
    });
  });
  
  describe('three', function() {
    it('should change on the fourth yield run', function(done) {
      setup.call(this);
      waitFor(360).then(() => {
        expect(this.$().text().trim()).to.equal('8');
        done();
      });
    });
  });
});



