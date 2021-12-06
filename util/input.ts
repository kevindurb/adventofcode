import * as fs from 'fs/promises';

export const loadInputLines = async (file: string): Promise<string[]> => {
  const input = (await fs.readFile(file)).toString();
  return input.split('\n').filter((x) => !!x);
};
