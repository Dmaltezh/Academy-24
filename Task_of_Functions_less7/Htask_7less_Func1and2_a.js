/*1. Написать функцию которая будет эмулировать игру в кубики, заданное
 количество игроков по очереди бросают кубик, каждый в итоге бросает 
 одинаковое количество раз (должно работать с любым количеством раз заданным в переменной).
  У кого сумма набранная будет наибольшей - тот выиграл. Если суммы равны то ничья. 
  Выведите результаты в консоль.*/
  console.log(`Задание №1:`);
function gameCube(countPlayers, countThrows){
let arrPoints=[];
let arrTotalPoint=[]; 

for (let k=1; k<=countPlayers;k++){
    let sum=0;
    for (let i=1; i<=countThrows;i++){
        arrPoints.push(Math.floor(Math.random()*6)+1);
        }
console.log(`Баллы игрока номер ${k}:  `, arrPoints);
 sum=arrPoints.reduce((prev,cur)=>cur+prev,0);
 arrTotalPoint.push(sum);
arrPoints.length=0;
}
console.log('Общая сумма баллов каждого игрока:  ', arrTotalPoint);
let maxPoint=Math.max(...arrTotalPoint);
console.log('Максимальная сумма баллов=', maxPoint)
let numberPlayer=arrTotalPoint.indexOf(maxPoint);
if (arrTotalPoint.includes(maxPoint,numberPlayer+1)===true){
    console.log('Ничья!')
}
else console.log('Выйграл игрок под номером ', numberPlayer+1);
}
gameCube(3,12);
console.log(`-----------------------------------------------------------------`);
console.log(`Задание №2(А):`);
/*2.  Написать функцию которая будет разбивать число на заданное количество рандомных чисел сумма которых будет равна изначальному числу. Пример: разбить 15 на 3 части (сумма четырех чисел будет равна 15) (4,6,5) - Ваш код должен работать с любым числом заданным в переменной (не только с 15) и с любым количеством частей на которые надо разбить число..
а. числа изначальное число целое, числа разбивки - целые (4,6,5)
б. числа разбивки дробные с 2 знаками после запятой 4.55, 5.20, 5.25)*/
function splitNumberInRandomTerms(num, amount){
    let arrTerms=[];  
     arrTerms.push(Math.floor(Math.random()*(num))+1);
          let currentSum=arrTerms[0];
          console.log(`Разложение числа ${num} на ${amount} целых слогаемых: `);
          do {
            let numRandom=Math.floor(Math.random()*(num))+1;
                 if (currentSum<num&& ((currentSum+numRandom)<=num)){
            arrTerms.push(numRandom);
            currentSum=currentSum+numRandom;
            numRandom=0;
                        }
    }
        while (currentSum!=num )
        let len=arrTerms.length;
    
        if (len<amount) {
            for (let i=len+1; i<=amount;i++){
                arrTerms.push(0);
            }
        }
        return console.log(arrTerms);
    }
    splitNumberInRandomTerms(11, 7);
    

       