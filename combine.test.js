const combine = require('./combine');
const t = require('chai').assert;

describe('combine', () => {
  it('works', () => {
    const mutations = [
      [{ key: 'a.b.c', value: true }, { key: 'a.b.d.e', value: 1 }],
      [{ key: 'a.b.c', value: true }, { key: 'a.b.d.e', value: 2 }],
      [{ key: 'a.b.c', value: true }, { key: 'a.b.d.e', value: 3 }],
      [{ key: 'a.b.c', value: false }, { key: 'a.b.d.e', value: 1 }],
      [{ key: 'a.b.c', value: false }, { key: 'a.b.d.e', value: 2 }],
      [{ key: 'a.b.c', value: false }, { key: 'a.b.d.e', value: 3 }],
    ];

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

    t.deepEqual(combine(mutations, template), [
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
