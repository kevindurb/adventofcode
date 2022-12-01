export function topElf(input: string): number {
  const elfValues = input.split('\n\n').map((elf) =>
    elf
      .trim()
      .split('\n')
      .map((value) => parseInt(value)),
  );

  const elfTotals = elfValues.map((elf) =>
    elf.reduce((sum, value) => sum + value, 0),
  );

  return elfTotals.reduce((max, elfTotal) => Math.max(max, elfTotal), 0);
}

export function topThreeElves(input: string): number {
  const elfValues = input.split('\n\n').map((elf) =>
    elf
      .trim()
      .split('\n')
      .map((value) => parseInt(value)),
  );

  const elfTotals = elfValues.map((elf) =>
    elf.reduce((sum, value) => sum + value, 0),
  );

  elfTotals.sort((a, b) => (a > b ? -1 : 1));

  const [a, b, c] = elfTotals;

  return a + b + c;
}
