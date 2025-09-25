export function add(input: string): number {
  if (input === '') {
    return 0;
  }
  const parts = input.split(',');
  return parts.reduce((sum, n) => sum + Number(n), 0);
}

