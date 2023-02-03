/**
 * Что бы вычислить минимальное значение, необходимо заменить 
 * Math.max на Math.min
*/
const max = (array, i, length) => {
  /**
   * Если в массиве есть только одно значение,
   * то можем вернуть его в качестве ответа
  */
  if (length === 1) {
    return array[0];
  }

  return Math.max(array[i], max(array, i += 1, length - 1));
};

const test = [15, -78, 1, 8, 10, 2, 88, 16];

console.log(max(test, 0, test.length)); /// 88

