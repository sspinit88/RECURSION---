/**
 * Что бы вычислить минимальное значение, необходимо заменить
 * Math.max на Math.min
 */
const max = (array) => {
  /**
   * Если в массиве есть только одно значение,
   * то можем вернуть его в качестве ответа.
   */
  if (array.length - 1 === 0) {
    return array[0];
  }

  let i = 0;

  if (array > 0) {
    i++;
  }

  const firstValue = array[i];
  const secondValue = max(array.splice(1));

  return Math.max(firstValue, secondValue);
};

const test = [15, -78, 1, 8, 10, 2, 88, 16];

console.log(max(test)); /// 88
