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

  const i = 0;
  const firstValue = array[i];
  const secondValue = max(array.splice(1));
  /**
   * будем сравнивать первое число массива, со следующим,
   * каждый раз сдвигаясь вправо.
  */
  return Math.max(firstValue, secondValue);
};

const test = [15, -78, 258, 1, 8, 10, 2, 88, 16, 100];

console.log(max(test)); /// 258
