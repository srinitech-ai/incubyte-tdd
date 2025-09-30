export function add(input: string): number {
  if (input === '') return 0;

  let numbersSection = input;
  let delimiters: string[] = [',', '\n']; // default

  if (input.startsWith('//')) {
    const newlineIndex = input.indexOf('\n');
    const delimiterPart = input.slice(2, newlineIndex);
    numbersSection = input.slice(newlineIndex + 1);

    if (delimiterPart.startsWith('[')) {
      // Handle multiple or multi-length delimiters
      const matches = delimiterPart.match(/\[([^\]]+)\]/g) || [];
      delimiters = matches.map((m) => m.slice(1, -1)); // remove []
    } else {
      // Single character delimiter
      delimiters = [delimiterPart];
    }
  }

  // Build regex for split
  const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const splitRegex = new RegExp(delimiters.map(escapeRegex).join('|'));

  const parts = numbersSection.split(splitRegex).filter((p) => p !== '');
  const numbers = parts.map(Number);

  const negatives = numbers.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(',')}`);
  }

  return numbers
    .filter((n) => n <= 1000) // ignore > 1000
    .reduce((sum, n) => sum + n, 0);
}
