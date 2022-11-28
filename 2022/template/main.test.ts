import { main } from './main'

describe('A Test', () => {
  test('It should work', () => {
    expect(main()).toBe('hello world');
  });
});
