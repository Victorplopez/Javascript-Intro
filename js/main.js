const exampleString = 'I am a.';
const exampleObjectString = new String('1');
const anotherString = 'I am a string.';
const H1 = document.getElementById('greeting');

// function checkExamples() {
//      if(exampleString == exampleObjectString){
//          console.log(`Yes, ${exampleString} and ${exampleObjectString} do loosely match!`);
//      } 
    
//     if(exampleString != anotherString){
//         console.log(`Yes, ${exampleString} and ${anotherString} do loosely match!`);
//     }else {
//         console.log('Sorry, they do not equal at all.');
//     }
// }

// checkExamples();

/********************************************************************** */

// const luckyNumber = 'Seven';
// const regularNumber = new String('Seven');

// if(luckyNumber === regularNumber){
//     console.log(`${luckyNumber} strictly matches ${regularNumber}`);
// } 
// else if(luckyNumber == regularNumber) {
//     console.log(`${luckyNumber} loosely matches ${regularNumber}`);
// }
// else {
//     console.log(`No mathing strings, sorry`); 
// }

// let intNum = parseInt('2.99');
// console.log(`${intNum}`)

/************************************************************************ */


// let a = '10';
// let transformMe = parseInt(a);
// console.log(`Before ${a}, after: ${transformMe}`, typeof(a), typeof(transformMe));


/**************************************************************************** */

// let valueNan = 'I am indeed NaN';
// let testNan = isNaN(valueNan);

// valueNan ? console.log('This is true') : console.log('This is false');


// H1.innerHTML = result;


/**************************************************************************** */

// const askColor = prompt('Pick one of the following colors: red, blue, or orange.')

// switch(askColor) {
//     case 'red': 
//         H1.innerHTML = `You chose ${askColor}`;
//     break;
//     case 'blue': 
//         H1.innerHTML = `You chose ${askColor}`;
//     break;
//     case 'orange': 
//         H1.innerHTML = `You chose ${askColor}`;
//     break;
//     default:
//         H1.innerHTML = 'You did not follow the rules.';
// }


/************************************************************************* 

Asks if the user is over 18
If the user is over 18, allow them to proceed, otherwise alert the user that they are not old enough.
Now that all your users at this point are at least 18, ask if they are less than 80 years old.
Now ask the users who are between 18 and 80 if they like Star Wars. If they are over 80, ask if they like prunes.
If they say they don't Star Wars, end the program. In all other cases, alert them with a message.
*/

function ageVerification(adultCheck){
    if(adultCheck === 'Yes'){
        seniorCitizen();
    }
    else {
        alert('Sorry, you are not old enough!');
    }    
}

function seniorCitizen(){
    let senior = prompt('Are you younger than 80 years old? Yes or No.')
    if(senior === 'Yes'){
        let starWarsFan = prompt('Do you like Star Wars? Yes or No.')
        if(starWarsFan === 'Yes'){
            alert('NERD')
        }
        else{
            exit();
        }
    }
    else {
        prompt('Do you like prunes?')
    }
}

let adultCheck = prompt('Are you 18 or older? Yes or No');
ageVerification(adultCheck);