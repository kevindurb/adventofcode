import * as fs from 'fs/promises';
import * as path from 'path';
import { loadInputLines } from '../util/input';

type Bit = '1' | '0';

const loadBits = async () => {
  const input = await loadInputLines(path.join(__dirname, 'input'));
  return input.map((line) => line.split('')) as Bit[][];
};

// part 1
(async () => {
  const lines = await loadBits();

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

// part 2
(async () => {
  const lines = await loadBits();

  const filterByBitPosition = (
    commonality: 'most' | 'least',
    position: number,
    list: Bit[][],
  ) => {
    const value: number = list.reduce((value: number, line: Bit[]) => {
      if (line[position] === '1') return value + 1;
      return value - 1;
    }, 0);

    let bit: Bit;

    if (commonality === 'most') {
      if (value >= 0) {
        bit = '1';
      } else {
        bit = '0';
      }
    } else {
      if (value >= 0) {
        bit = '0';
      } else {
        bit = '1';
      }
    }

    console.log('check for', value, bit);

    return list.filter((line) => line[position] === bit);
  };

  const findFinalForCommonality = (
    commonality: 'most' | 'least',
    list: Bit[][],
  ) => {
    let filteredList: Bit[][] = list;
    const lineLength = list[0].length;

    for (let position = 0; position < lineLength; position++) {
      console.log('filtering', commonality, position);
      filteredList = filterByBitPosition(commonality, position, filteredList);
      console.log('lines left', filteredList.length);
      if (filteredList.length === 1) return filteredList[0];
    }
  };

  const oxygenGenBits = findFinalForCommonality('most', lines)!;
  const co2ScrubBits = findFinalForCommonality('least', lines)!;

  const oxyValue = parseInt(oxygenGenBits.join(''), 2);
  const co2Value = parseInt(co2ScrubBits.join(''), 2);

  console.log('oxy', oxyValue);
  console.log('co2', co2Value);
  console.log('life', oxyValue * co2Value);
})();
