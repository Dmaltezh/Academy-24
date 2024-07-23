/* Решить используя промисы и async/await. Сделайте 3 промиса, в каждом из которых расположена '
функция setTimeout со случайной задержкой от 1 до 5 секунд. Пусть первый промис возвращает 
число 1, второе - число 2, третий - число 3.
С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите
 результат его работы на экран.
 */
 function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min - 1) + min);
  }
const  p1=new Promise((res) => {
      setTimeout(() => 
      res('1'), getRandomNumber(1, 5)*1000)
    })
    p1.then((data) => {
        //console.log(data, 'first promise')
    })
const  p2=new Promise((res) => {
        setTimeout(() => 
        res('2'), getRandomNumber(1, 5)*1000)
      })
    p2.then((data) => {
        }) 
const  p3=new Promise((res) => {
        setTimeout(() => 
        res('3'), getRandomNumber(1, 5)*1000)
      })
    p3.then((data) => {
       })
Promise.race([p1, p2, p3])
    .then(data => {
        console.log(`Leader in race of promises is: `);
        console.log(data)
    })
    .catch(err => {
      console.log(err)
    })