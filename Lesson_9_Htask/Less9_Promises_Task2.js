/* Сделайте функцию getNum, которая возвращает промис, который 
с задержкой в 3 секунды выведет случайное число от 1 до 5. 
Создайте async функцию, которая с помощью await будет дожидаться 
результата getNum, затем возводить его в квадрат и выводить на экран.
 */

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min - 1) + min);
  }
  function getNum (timeout){
    return new Promise((res, rej) => {
        const randomNumber = getRandomNumber(1, 5);
        setTimeout(() => {
          res(randomNumber)
         }, timeout)
      })
  }
  
async function getPowNumber(powNumber, timeout) {
    const number = await getNum(timeout);
    console.log(`randomNumber=`, number);
    const powNum = Math.pow(number, powNumber);
    console.log(`square of the randomNumber=`, powNum);
  return powNum;  
  }
getPowNumber(2, 3000);
  