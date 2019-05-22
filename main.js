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

