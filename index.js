/**
 * Что бы вычислить минимальное значение, необходимо заменить 
 * Math.max на Math.min
*/
const max = (array, i = 0) => {
    /**
     * Если в массиве есть только одно значение,
     * то можем вернуть его в качестве ответа
    */
    if (array.length === 1) {
      return array[0];
    }
  
    const firstValue = array[i];
    const secondValue = max(array.splice(1), i++);

    return Math.max(firstValue, secondValue);
  };
  
  const test = [15, -78, 1, 8, 10, 2, 88, 16];
  
  console.log(max(test)); /// 88
