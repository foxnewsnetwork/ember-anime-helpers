import Ember from 'ember';
import { r200 } from 'dummy/utils/asyncs';

const The = 'The';

function * panstar(The) {
    yield The
    const quick = yield r200(`${The} quick`);
    const brown = yield r200(`${quick} brown`);
    const fox = yield r200(`${brown} fox`);
    const jumped = yield r200(`${fox} jumped`);
    const over = yield r200(`${jumped} over`);
    const the = yield r200(`${over} the`);
    const lazy = yield r200(`${the} lazy`);
    const dog = yield r200(`${lazy} dog`);
    return dog;
}

export default Ember.Route.extend({
    model() {
        return { panstar, The };
    }
});
