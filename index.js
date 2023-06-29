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
  /// рекурсивно дойдет до последнего значение массива
  const secondValue = max(array.splice(1));
  /**
   * будем даигаться в обратном порядке при сравнении чисел (из-за стека)
   *
   * 88 5
   * 100 88
   * 16 100
   * 200 100
   * 10 200
   * 8 200
   * ...
   * 15 258
   *
   * пока не останется единственное значение в массиве
   *    * 258
   */

  // console.log(firstValue, secondValue);

  /// return Math.min(firstValue, secondValue);
  return Math.max(firstValue, secondValue);
};

const test = [15, -78, 258, 210, 8, 10, 200, 16, 100, 88, 5];

console.log(max(test)); /// 258
