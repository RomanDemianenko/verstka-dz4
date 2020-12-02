// 111111111111111111111
// b = confirm('dz1');

// while (b === false) {
//     b = confirm('dz1')
// }

// 1111111111111111111


// 22222222222222222222222222222
// let c = +prompt('Enter your number');
// let arr = [];
// for (i = 0; i <= c; i++){
//     arr[i]=i;
// }
// let b = arr.map(n => n ** 3);
// console.log(b)
// 2222222222222222222222222222

//333333333333333333333333333333333




let a = +prompt('Enter your number');



function calculate(){
    let arr = [];
for (let i = 1; i <= a; i++){
    arr[i]=i;
}
    // console.log(arr)
    let sum = 0;
    for (i = 1; i <= arr.length; i+=3){
        sum+=i;
    }

    console.log(sum);
}
calculate();




// 3333333333333333333333333333333333333333


// 44444444444444444444444444444

// let a = +prompt('количество строк');
// let b = +prompt('Количетсво повторов');

// let d = '#.';
// let y = '.#';
// let string = [];
// let arr = [];
// for (i = 1; i <= a; i++){
//     arr[i] = i;
//     if (arr[i]%2!=0){
//         string = string + d.repeat(b) + '\n';
//     } else {
//         string = string + y.repeat(b) + '\n';
//     }
// }

// console.log(string);
