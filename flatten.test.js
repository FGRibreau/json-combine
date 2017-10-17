const t = require('chai').assert;
const flatten = require('./flatten');
describe('flatten', () => {
  it('flatten arrays', () => {
    t.deepEqual(
      flatten([
        { key: 'k1', values: ['a', 'b', 'c'] },
        { key: 'k2', values: ['d', 'e', 'f'] },
        { key: 'k3', values: ['g', 'h', 'i'] },
      ]),
      [
        [
          { key: 'k1', value: 'a' },
          { key: 'k2', value: 'd' },
          { key: 'k3', value: 'g' },
        ],
        [
          { key: 'k1', value: 'a' },
          { key: 'k2', value: 'd' },
          { key: 'k3', value: 'h' },
        ],
        [
          { key: 'k1', value: 'a' },
          { key: 'k2', value: 'd' },
          { key: 'k3', value: 'i' },
        ],
        [
          { key: 'k1', value: 'a' },
          { key: 'k2', value: 'e' },
          { key: 'k3', value: 'g' },
        ],
        [
          { key: 'k1', value: 'a' },
          { key: 'k2', value: 'e' },
          { key: 'k3', value: 'h' },
        ],
        [
          { key: 'k1', value: 'a' },
          { key: 'k2', value: 'e' },
          { key: 'k3', value: 'i' },
        ],
        [
          { key: 'k1', value: 'a' },
          { key: 'k2', value: 'f' },
          { key: 'k3', value: 'g' },
        ],
        [
          { key: 'k1', value: 'a' },
          { key: 'k2', value: 'f' },
          { key: 'k3', value: 'h' },
        ],
        [
          { key: 'k1', value: 'a' },
          { key: 'k2', value: 'f' },
          { key: 'k3', value: 'i' },
        ],

        [
          { key: 'k1', value: 'b' },
          { key: 'k2', value: 'd' },
          { key: 'k3', value: 'g' },
        ],
        [
          { key: 'k1', value: 'b' },
          { key: 'k2', value: 'd' },
          { key: 'k3', value: 'h' },
        ],
        [
          { key: 'k1', value: 'b' },
          { key: 'k2', value: 'd' },
          { key: 'k3', value: 'i' },
        ],
        [
          { key: 'k1', value: 'b' },
          { key: 'k2', value: 'e' },
          { key: 'k3', value: 'g' },
        ],
        [
          { key: 'k1', value: 'b' },
          { key: 'k2', value: 'e' },
          { key: 'k3', value: 'h' },
        ],
        [
          { key: 'k1', value: 'b' },
          { key: 'k2', value: 'e' },
          { key: 'k3', value: 'i' },
        ],
        [
          { key: 'k1', value: 'b' },
          { key: 'k2', value: 'f' },
          { key: 'k3', value: 'g' },
        ],
        [
          { key: 'k1', value: 'b' },
          { key: 'k2', value: 'f' },
          { key: 'k3', value: 'h' },
        ],
        [
          { key: 'k1', value: 'b' },
          { key: 'k2', value: 'f' },
          { key: 'k3', value: 'i' },
        ],

        [
          { key: 'k1', value: 'c' },
          { key: 'k2', value: 'd' },
          { key: 'k3', value: 'g' },
        ],
        [
          { key: 'k1', value: 'c' },
          { key: 'k2', value: 'd' },
          { key: 'k3', value: 'h' },
        ],
        [
          { key: 'k1', value: 'c' },
          { key: 'k2', value: 'd' },
          { key: 'k3', value: 'i' },
        ],
        [
          { key: 'k1', value: 'c' },
          { key: 'k2', value: 'e' },
          { key: 'k3', value: 'g' },
        ],
        [
          { key: 'k1', value: 'c' },
          { key: 'k2', value: 'e' },
          { key: 'k3', value: 'h' },
        ],
        [
          { key: 'k1', value: 'c' },
          { key: 'k2', value: 'e' },
          { key: 'k3', value: 'i' },
        ],
        [
          { key: 'k1', value: 'c' },
          { key: 'k2', value: 'f' },
          { key: 'k3', value: 'g' },
        ],
        [
          { key: 'k1', value: 'c' },
          { key: 'k2', value: 'f' },
          { key: 'k3', value: 'h' },
        ],
        [
          { key: 'k1', value: 'c' },
          { key: 'k2', value: 'f' },
          { key: 'k3', value: 'i' },
        ],
      ]
    );
  });
});
