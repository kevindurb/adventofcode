import * as fs from 'fs/promises';
import { topThreeElves, topElf } from './main';

const testInput = `
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`;

describe('day1.1', () => {
  test('It should return the sum of the group with the highest value for the test input', () => {
    expect(topElf(testInput)).toBe(24000);
  });

  test('It should return the sum of the group with the highest value for the real input', async () => {
    const realInput = (await fs.readFile('./2022/day1/input.txt')).toString();
    expect(topElf(realInput)).toBe(67027);
  });
});

describe('day1.2', () => {
  test('It should return the sum of the top three elves for the test input', () => {
    expect(topThreeElves(testInput)).toBe(45000);
  });

  test('It should return the sum of the top three elves for the real input', async () => {
    const realInput = (await fs.readFile('./2022/day1/input.txt')).toString();
    expect(topThreeElves(realInput)).toBe(197291);
  });
});
