/*let arr=[1, 3, 5, 7];
console.log(arr[arr.length-1]);
let str= 'stroka';
console.log(str.length);
console.log(str[0]); //первый символ
console.log(str[str.length-1]); //последний символ */


//сортировка на мужчин и женщин по отчеству
/*let surname=[
    'Владимировна', 
    'Викторович',
    'Николаевич',
    'Николаевна',
    'Артемовна'
];
let man=[];
let woman=[];
for( let i=0; i<surname.length; i++){ 
    let name=surname[i]  
    if(name[name.length-1]=='а'){        
        woman.push(surname[i]);
    }
    else{
        man.push(surname[i]);
    }
}
console.log(man);
console.log('--------');
console.log(woman);

// нахождение минимального и максимального значения
let number=[3, 5, 56, 7, 78, 65, 34, 36, 0, -5];
let max=null;
let min=null;
for(let i=0; i<number.length; i++){
    if(number[i]>max){        
        max=number[i];
    } else{
        min=number[i]; 
    }    
}
console.log('max ='+ max);
console.log('min ='+ min);*/

//сортироовка элементов массива по типу данных
let arr=[1, 'Вася', 3, 5, 7, 'Артем', false, ['Маша', 2, 4, false], 'Петя', true, 9, 11, true, 'Валерия', [ 6, 8, 'Сергей', 10]];
let name=[];
let num=[];
let booll=[];
let array=[];
let a=null;
for(let i=0; i<arr.length; i++){    
    if(typeof arr[i]=="number"){
        num.push(arr[i]);
    }else if(typeof(arr[i])=="string"){
        name.push(arr[i]);
    }else if(typeof arr[i]=="boolean"){
        booll.push(arr[i]);
    }else{
        a=arr[i];
        for(let x=0; x<a.length; x++){
            if(typeof a[x]=="number"){
                num.push(a[x]);
            }else if(typeof(a[x])=="string"){
                name.push(a[x]);
            }else {
                booll.push(a[x]);
            }
        }
    }
}
console.log('name:'+ name);
console.log('number:'+ num);
console.log('boolean:'+ booll);

