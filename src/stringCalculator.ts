export function add(input: string): number {
  if (input === '') {
    return 0;
  }
  const normalized = input.replace(/\n/g, ',');
  const parts = normalized.split(',');
  return parts.reduce((sum, n) => sum + Number(n), 0);
}

