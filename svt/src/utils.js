export function intersperse(arr, sep) {
  return arr.reduce((a, v) => [...a, v, sep], []).slice(0, -1);
}

export function surroundEach(arr, sep) {
  return [sep, ...intersperse(arr, sep), sep];
}
