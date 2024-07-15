/*1. Дана строка из четного количества цифр. Проверьте, что сумма первой половины цифр равняется 
сумме второй половине цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.*/
console.log(`Задание №1:`);
function sumHalfOfnumbers(str) {
let num=str.split(''); //num.map(Number); console.log(num);
let lenHalf=(num.length)/2;
let firstNum=num.slice(0, lenHalf), secondNum=num.slice(lenHalf, num.length);
console.log(`Первая половина строки: `, firstNum);
console.log(`Вторая половина строки: `, secondNum);
let sum1=0, sum2=0;
for (let i=0; i<lenHalf; i++){
    sum1+=Number(firstNum[i]);
    sum2+=Number(secondNum[i]);
}
    if (sum1===sum2) {
        console.log(`Да. Суммы равны!`);
    }
    else console.log(`Нет. Суммы не равны!`)
}
sumHalfOfnumbers('15344321');
console.log(`-------------------------------------------------------`);
console.log(`Задание №2:`);
/*2. Дано число n=1000 (может быть заданное любое число). Делите его на 2 столько раз, пока результат 
деления не станет меньше 50 (может быть любое заданное число). Какое число получится? Посчитайте 
количество  итераций, необходимых для этого (итерация - это проход цикла), 
и запишите его в переменную num.*/
function divisionByTwo(numb, res) {
    let num=0;
    let quotient=numb/2;
        num++;
    while (quotient>=res){
            quotient=quotient/2;
            num++;
        }
    
        return console.log(`Результат деления=${quotient}. Число итераций равно=${num}.`)
}
divisionByTwo(1200, 50);
console.log(`-------------------------------------------------------`);
console.log(`Задание №3:`);
/*3. Дан массив arr. Найдите среднее арифметическое его элементов. 
Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.*/
function average(arrNums) {
    return arrNums.reduce((a, b) => (a + b)) / arrNums.length;
}
const arrNums=[12, 15, 20, 25, 59, 79]; console.log(`Massiv: `, arrNums)
console.log(`Cреднее арифметическое его элементов=`, average(arrNums));
console.log(`-------------------------------------------------------`);
console.log(`Задание №4:`);
/*4. Напишите функцию, которая вставит данные в массив с заданного места в массиве. 
Дан массив [1, 2, 3, 4, 5]. Сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].*/
let arr=[1, 2, 3, 4, 5]; console.log(`Исходный массив: `, arr);
function insertToMassiv(arr, str){
    for (let i=0; i<str.length; i++){
            arr.splice(3+i, 0, str[i]);
    }
    return console.log(`Массив после вставки новых элементов: `, arr);
}
insertToMassiv(arr, 'abc');
console.log(`-------------------------------------------------------`);
console.log(`Задание №5:`);
/*5. Напишите функцию, которая вставит данные в массив в заданные несколько мест в массиве.
 Дан массив [1, 2, 3, 4, 5]. Сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].*/
 let arr2=[1, 2, 3, 4, 5]; console.log(`Исходный массив: `, arr2); 
function insertStrToMassiv(arr2, str, a,s,d){
        arr2.splice(a, 0, str[0],str[1]);
        arr2.splice(s,0,str[2]);
        arr2.splice(d,0,str[3]);
    return console.log(`Массив после вставки новых элементов: `, arr2);
}
insertStrToMassiv(arr2, 'abce', 1,6,8);
console.log(`-------------------------------------------------------`);
console.log(`Задание №6:`);
/*6. Дан массив [3, 4, 1, 2, 7. 30. 50]. Отсортируйте его.*/
const arrNumb=[3, 4, 1, 2, 7, 30, 50];  
function sortMassiv(arrNumb){
    console.log(`Cортировка массива [${arrNumb}] - `);
    let arr6=[...arrNumb];
    console.log('по возрастанию: ', arrNumb.sort((a,b)=>a-b));
    console.log('по убыванию: ', arr6.sort((a,b)=>b-a)); 
}
sortMassiv(arrNumb);
