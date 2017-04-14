import Ember from 'ember';

const { computed: { readOnly } } = Ember;
export default Ember.Controller.extend({
    panstar: readOnly('model.panstar'),
    x1: readOnly('model.The'),
    actions: {
        vanillaDone() {
            this.set('vanillaResults', 'peppercorn');
        },
        exprDone(str) {
            this.set('exprResults', str);
        },
        controlDone() {
            this.set('controlResults', 'peppercorn')
        }
    }
});
