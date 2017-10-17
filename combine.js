const set = require('lodash.set');
const cloneDeep = require('lodash.clonedeep');

function combine(mutations, template) {
  return mutations.map(sets =>
    sets.reduce(
      (obj, { key, value }) => set(obj, key, value),
      cloneDeep(template)
    )
  );
}

module.exports = combine;
