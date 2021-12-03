import * as fs from 'fs/promises';
import * as path from 'path';

type Direction = 'forward' | 'down' | 'up';
type Command = [Direction, number];

// part 1
(async () => {
  const input = (await fs.readFile(path.join(__dirname, 'input'))).toString();
  const commands = input
    .split('\n')
    .filter((x) => !!x)
    .map((line) => {
      const [direction, value] = line.split(' ');
      return [direction, parseInt(value, 10)];
    }) as Command[];

  const [finalX, finalY] = commands.reduce(
    ([x, y], [direction, value]) => {
      if (direction === 'up') {
        return [x, y - value];
      } else if (direction === 'down') {
        return [x, y + value];
      } else if (direction === 'forward') {
        return [x + value, y];
      }
      throw new Error(`unknown direction ${direction}`);
    },
    [0, 0],
  );

  console.log('part 1', finalX * finalY);
})();

// part 2
(async () => {
  const input = (await fs.readFile(path.join(__dirname, 'input'))).toString();
  const commands = input
    .split('\n')
    .filter((x) => !!x)
    .map((line) => {
      const [direction, value] = line.split(' ');
      return [direction, parseInt(value, 10)];
    }) as Command[];

  const [finalX, finalY, aim] = commands.reduce(
    ([x, y, aim], [direction, value]) => {
      if (direction === 'up') {
        return [x, y, aim - value];
      } else if (direction === 'down') {
        return [x, y, aim + value];
      } else if (direction === 'forward') {
        const vertical = aim * value;
        return [x + value, y + vertical, aim];
      }
      throw new Error(`unknown direction ${direction}`);
    },
    [0, 0, 0],
  );

  console.log('part 2', finalX, finalY, finalX * finalY);
})();
