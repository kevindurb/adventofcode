import * as fs from 'fs/promises';
import * as path from 'path';

// part 1
(async () => {
  const input = (await fs.readFile(path.join(__dirname, 'input'))).toString();
  const lines = input
    .split('\n')
    .filter((x) => !!x)
    .map((line) => line.split('')) as ('1' | '0')[][];

  const finalCounts = lines.reduce<number[]>((counts, line) => {
    return line.map((value, index) => {
      if (value === '1') {
        return (counts[index] ?? 0) + 1;
      }
      return (counts[index] ?? 0) - 1;
    });
  }, []);

  const [gammaBits, epsilonBits] = finalCounts.reduce(
    ([gBits, eBits], column) => {
      if (column > 0) {
        return [gBits + '1', eBits + '0'];
      }
      return [gBits + '0', eBits + '1'];
    },
    ['', ''],
  );
  const gammaRate = parseInt(gammaBits, 2);
  const epsilonRate = parseInt(epsilonBits, 2);

  console.log('gammaBits', gammaBits);
  console.log('epsilonBits', epsilonBits);
  console.log('gammaRate', gammaRate);
  console.log('epsilonRate', epsilonRate);

  console.log('part 1', gammaRate * epsilonRate);
})();
