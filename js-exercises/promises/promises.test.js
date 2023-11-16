import { promises } from './promises';

describe('allPromises', () => {
  test('The function should return a Promise', () => {
    expect(promises() instanceof Promise).toBe(true);
  });

  test('Promise call should return an array of values from promises', () => {
    const p1 = new Promise(res => res(1));
    const p2 = 2;
    const p3 = Promise.resolve(3);
    return expect(promises([p1, p2, p3])).resolves.toEqual([1, 2, 3]);
  });
});
