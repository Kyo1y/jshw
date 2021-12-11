// let num = 10;
// let float = 10.5;
// // let bigInt = 10n;

// let result = (num + float) % 2; 

// console.log(result);

// let str = 'Hello';
// let author = "Mc'Donalds";
// let message = `n,dkjddj jddjdj ${author}`

// console.log(message);

// let author = "Mike"
// let message = "message from" + author;

// let num = 20;
// let nnum = parseInt ( prompt('Write your name'));
// nnumber = parseInt(nnumber);

// // let number2 = +nnum

// let result = num + nnum;
// console.log(typeof result);

Boolean

// let isCool = 'false';
let hasCash = true;

// let num = 10;
// let askNumber = parseInt(prompt('Give a number'));

// if (askNumber > 10){
// console.log('More than 10');
// } else if (askNumber > 20) {
//     console.log('More than 20');
// }

// if (askNumber > 10 && askNumber < 20 ) {
//     console.log(askNumber);
// } else {
//     console.log('Number has not got into the range');
// }

// let price = 40
// let debitcard = parseInt ( prompt('Give a number'));
// if (askNumber > price || debitcard > price ) {
//     console.log('Buying goods');
// } else if (askNumber < price || debitcard < price) {
//     console.log('Getting upset and going home');
// } else {
//     console.log('Buying goods');
// }

let day = +prompt('Which day of the week it is 1-7?');

switch (day) {
    case 1:
        console.log('Mon');
        break;
    case 2:
        console.log('Tue');
        break;
    case 3:
        console.log('Wed');
        break;
    case 4:
        console.log('Thu');
        break;
    case 5:
        console.log('Fri');
        break;
    case 6:
        console.log('Sat');
        break;
    case 7:
        console.log('Sun');
        break;

        default: console.log('No such day of the week');
}

// let day = prompt('Which day of the week it is?');
// switch (day) {
//     case 'M ':  
//     case 'Mon' :
//     case 'Monday' :
//         console.log('Today is the 1st day of the week');
//         break;  
// }


// let ask = confirm('You up?');

// let result = ask ? 'Yes' : 'No';
// console.log(result);