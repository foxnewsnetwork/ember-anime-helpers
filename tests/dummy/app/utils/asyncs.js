import Ember from 'ember';

const { RSVP, run } = Ember;

const resolveAfter = (time) => (value) => 
    new RSVP.Promise((resolve) => run.later(() => resolve(value), time));

const r200 = resolveAfter(200);
const r250 = resolveAfter(250);

export { resolveAfter, r200, r250 };