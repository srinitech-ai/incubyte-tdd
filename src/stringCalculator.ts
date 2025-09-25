export function add(input: string): number {
  if (input === '') {
    return 0;
  }
  // Custom delimiter format: //;<newline>numbers
  let delimiter = ',';
  let numbersSection = input;
  if (input.startsWith('//')) {
    const newlineIndex = input.indexOf('\n');
    delimiter = input.slice(2, newlineIndex);
    numbersSection = input.slice(newlineIndex + 1);
  }
  const normalized = numbersSection.replace(/\n/g, delimiter);
  const parts = normalized.split(',');
  const finalParts = delimiter === ',' ? parts : normalized.split(delimiter);
  return finalParts.reduce((sum, n) => sum + Number(n), 0);
}

