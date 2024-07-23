console.log('Set the value of the initial data:const str=`23`;num=15; bool=true')
const str=`23`;
const num=15;
const bool=true;
//1) Выполнить сложение различных типов(string+boolean, string+number, number+boolean)
console.log('1) Выполнить сложение различных типов(string+boolean, string+number, number+boolean)');
let x=str+bool;
console.log(x);
console.log('Type of sum_data (string+boolean) is ', typeof(x));
x=str+num;
console.log(x);
console.log('Type of sum_data (string+number) is ', typeof(x));
x=num+bool;
console.log(x);
console.log('Type of sum_data (number+boolean) is ', typeof(x));
//2) Выполнить умножение различных типов(string * boolean, string * number, number * boolean)
console.log('2) Выполнить умножение различных типов(string * boolean, string * number, number * boolean)');
let y=str*bool;
let r=str*num;
let p=num*bool;
console.log(y,r,p);
//3) Выполнить деление различных типов(string/boolean, string/number, number/Boolean)
console.log('3) Выполнить деление различных типов(string/boolean, string/number, number/Boolean)');
let k=str/bool;
let l=str/num;
let s=num/bool;
console.log(k,l,s);
console.log('4) Выполнить явное преобразование(number, string, boolean)');
//4) Выполнить явное преобразование(number, string, boolean)
console.log(Number(str)+num);
console.log('I am ' + String(num) + ' years old');
console.log(Boolean(str-num));