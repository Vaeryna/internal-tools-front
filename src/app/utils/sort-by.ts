export function sortBy(filter: string, order: 'asc' | 'desc', input: any[]) {
  return input.sort((a, b) => {
    const A = a[filter];
    const B = b[filter];

    if (typeof A === 'number' && typeof B === 'number') {
      return order === 'asc' ? A - B : B - A;
    }

    const result = String(A).localeCompare(String(B));
    return order === 'asc' ? result : -result;
  });
}
