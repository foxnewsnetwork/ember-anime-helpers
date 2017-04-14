import Ember from 'ember';
import {
  create,
  visitable,
  text
} from 'ember-cli-page-object';
import { findElement } from 'ember-cli-page-object/extend';

export default create({
  visit: visitable('sandbox'),
  vanilla: text('.sandbox__gen-take-vanilla'),
  control: text('.sandbox__gen-take-control'),
  expr: text('.sandbox__gen-take-expr'),
  exprResult() {
    return findElement(this, '.sandbox__gen-take-expr-results').text().trim();
  },
  vanillaResult() {
    return findElement(this, '.sandbox__gen-take-vanilla-results').text().trim();
  },
  controlResult() {
    return findElement(this, '.sandbox__gen-take-control-results').text().trim();
  }
});
