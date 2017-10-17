const { combine, flatten } = require('./');
const t = require('chai').assert;

describe('json-combine', () => {
  it('works', () => {
    // mutation to apply
    const mutations = [
      {
        key: 'a.b.c',
        values: [true, false],
      },
      {
        key: 'a.b.d.e',
        values: [1, 2, 3],
      },
    ];

    // base object
    const template = {
      a: {
        b: {
          c: false,
          d: {
            e: 0,
          },
        },
      },
    };

    t.deepEqual(combine(flatten(mutations), template), [
      {
        a: {
          b: {
            c: true,
            d: {
              e: 1,
            },
          },
        },
      },
      {
        a: {
          b: {
            c: true,
            d: {
              e: 2,
            },
          },
        },
      },
      {
        a: {
          b: {
            c: true,
            d: {
              e: 3,
            },
          },
        },
      },
      {
        a: {
          b: {
            c: false,
            d: {
              e: 1,
            },
          },
        },
      },
      {
        a: {
          b: {
            c: false,
            d: {
              e: 2,
            },
          },
        },
      },
      {
        a: {
          b: {
            c: false,
            d: {
              e: 3,
            },
          },
        },
      },
    ]);
  });
});
