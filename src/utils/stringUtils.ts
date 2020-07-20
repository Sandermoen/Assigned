export const firstLetters = (string: string): string => {
  string = string.toUpperCase();
  if (string.length >= 2) {
    const split = string.split(' ');
    if (split.length >= 2) {
      return split[0][0] + split[1][0];
    }
    return split[0][0] + split[0][1];
  }
  return string[0];
};
