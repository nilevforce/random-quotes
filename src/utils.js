const generateRandomInt = (max, min = 0) => {
  if (typeof max !== 'number' || typeof min !== 'number') {
    throw new Error('Max and min must be a numbers');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateHexId = () => Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

// eslint-disable-next-line
export { generateRandomInt, generateHexId };