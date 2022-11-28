import * as fs from 'fs/promises';
import * as path from 'path';

// part #1
(async () => {
  const input = (await fs.readFile(path.join(__dirname, 'input'))).toString();
  const lines = input.split('\n').map((x) => parseInt(x, 10));

  const increases = lines.reduce((increases, current, idx, lines) => {
    if (idx === 0) return 0;

    return current > lines[idx - 1] ? increases + 1 : increases;
  }, 0);

  console.log('single', increases);
})();

// part #2
(async () => {
  const input = (await fs.readFile(path.join(__dirname, 'input'))).toString();
  const lines = input.split('\n').map((x) => parseInt(x, 10));

  const increases = lines.reduce((increases, current, idx, lines) => {
    if (idx < 3) return 0;

    const [a1, a2, a3] = [lines[idx - 3], lines[idx - 2], lines[idx - 1]];
    const a = a1 + a2 + a3;

    const [b1, b2, b3] = [lines[idx - 2], lines[idx - 1], lines[idx]];
    const b = b1 + b2 + b3;

    return b > a ? increases + 1 : increases;
  }, 0);

  console.log('window', increases);
})();
