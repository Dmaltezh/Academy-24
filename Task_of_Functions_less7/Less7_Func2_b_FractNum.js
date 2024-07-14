/*2.  Написать функцию которая будет разбивать число на заданное количество рандомных чисел сумма которых будет равна изначальному числу. Пример: разбить 15 на 3 части (сумма четырех чисел будет равна 15) (4,6,5) - Ваш код должен работать с любым числом заданным в переменной (не только с 15) и с любым количеством частей на которые надо разбить число..
б. числа разбивки дробные с 2 знаками после запятой */
console.log(`Задание №2(Б):`);
function genRand(min, max, decimalPlaces) {  
    let rand = Math.random()*(max-min) + min;
    let power = Math.pow(10, decimalPlaces);
    return Math.floor(rand*power) / power;
}
//console.log(genRand(0, 15, 2));
function splittingNumberInRandomFractTerms(num, amount){
    let arrTerms=[];  
     arrTerms.push(genRand(0.00, num, 2));
          let currentSum=arrTerms[0];
          console.log(`Разбиение числа ${num} на ${amount} дробных слогаемых: `);
         
        while (arrTerms.length!==amount && currentSum!==num )
        {
            let numRandom=Math.floor(genRand(0.00, num, 2));
                if (currentSum<num&& ((currentSum+numRandom)<=num)){
                arrTerms.push(numRandom);
                currentSum=currentSum+numRandom;                            
            }
        }
        let len=arrTerms.length;
    console.log(len);
        if (len<amount) {
            for (let i=len+1; i<=amount;i++){
                arrTerms.push(0.00);
            }
        }
        newArr=arrTerms.map(numb=>parseFloat(numb).toFixed(2))
        return console.log(newArr);
    }
    splittingNumberInRandomFractTerms(12, 16);