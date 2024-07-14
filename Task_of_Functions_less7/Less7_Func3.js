/*3. Написать функцию которая подсчитывает количество Пятниц 13-ого с любой заданной даты
 в прошлом до сегодня. Ваш код должен иметь возможность считать количество дней на 
любую заданую в переменной первоначальную дату...*/
function numberOfFridayThe13(jahr,month,day) {
    let amountMonth=12;
    let  curDate = new Date(Date.now());
    let currentYear=curDate.getFullYear();
    let currentMonth=curDate.getMonth();
    let count = 0;
    let d2 = new Date(jahr,month,day);
    let d1 = new Date(jahr,month,13);
        if(d1.getDay() == 5){
            if (d2.getDate() <= d1.getDate()) 
            {count++;
            console.log(`Пятница 13-го номер ${count}:`, d1.toString());
            }
        }
        for (let m=month+1; m<12; m++) {
            let d = new Date(jahr, m, 13);
            if(d.getDay() == 5){
              count++;
              console.log(`Пятница 13-го номер ${count}:`, d.toString());
           }
        } 
for (let k=jahr+1; k<=currentYear; k++)  {
    if (k===currentYear) 
    { amountMonth=currentMonth;}
    
    for (let m=0; m<amountMonth; m++) {
        let d = new Date(k, m, 13);
        if(d.getDay() == 5)  {
          count++;
          console.log(`Пятница 13-го номер ${count}:`, d.toString());
       }
    } 
}
return console.log(`Количество всех Пятниц 13-го с даты ${jahr}/${month}/${day} до сегодня: `,count);                            
}
numberOfFridayThe13(2016,1,5);