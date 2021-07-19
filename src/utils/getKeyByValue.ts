const getKeyByValue = (object, value) => {
  const keyName = Object.keys(object).find((key) => object[key] === value);

  return keyName;
};

export default getKeyByValue;
