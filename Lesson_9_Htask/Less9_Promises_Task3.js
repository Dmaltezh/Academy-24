/* Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 
секунды выведет случайное число от 1 до 5. Используйте также функцию getNum, 
чтобы вернуть промис, который с задержкой в 5 секунд выведет случайное 
число от 6 до 10. Создайте async функцию, которая с помощью await будет 
дожидаться результата функции, затем будет 
дожидаться результата второй функции, а затем найдет сумму полученных чисел и выводит на экран. */
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min - 1) + min);
  }
  function getNum (timeout, min, max){
    return new Promise((res, rej) => {
        const randomNumber = getRandomNumber(min, max);
        setTimeout(() => {
          res(randomNumber)
         }, timeout)
      })
  }
  
async function getSumNumbers(timeout1, timeout2, min1, max1, min2, max2) {
    const number1 = await getNum(timeout1, min1, max1);
    console.log(`randomNumber_1=`, number1);
    const number2 = await getNum(timeout2, min2, max2);
    console.log(`randomNumber_2=`, number2);
    const sumNum = number1+number2;
    console.log(`Sum of the two randomNumbers=`, sumNum);
  return sumNum;  
  }
getSumNumbers(3000,5000,1,5,6,10);
  