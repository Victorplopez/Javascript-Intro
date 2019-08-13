function myFunk() {
    let yourName = prompt('Tell me your name.');
    // let hobbyOne = prompt('Hello ' + yourName + ' tell me some of your hobbies');
    // let hobbyTwo = prompt('What is your second hobby?');
    // let hobbyThree = prompt('What is your third hobby?');
    // console.log("Wow, you like " + hobbyOne + " too?");
    // console.log("No way " + hobbyTwo + " is an amazing hobby");
    // alert(hobbyThree);
}

function grabElementAndSpitOutValue() {
    //Get element from index
    const MAIN_DIV = document.getElementById('mainDiv');
    //Write out in html
    MAIN_DIV.innerHTML = 'Hey, I am here.';
    //execute
    console.log('This hit.')
}