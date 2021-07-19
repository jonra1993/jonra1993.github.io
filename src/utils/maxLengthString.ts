const maxLengthString = (text: string, maxCharacters: number = 20): string => {
  const { length } = text;

  if (maxCharacters > length) {
    return `${text.substr(0, maxCharacters)}`;
  }
  return `${text.substr(0, maxCharacters)}...`;
};

export default maxLengthString;
