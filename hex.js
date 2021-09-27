// ingredients for a hex value
// hex-colors have a # and then 6 numbers and/or letters
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// listen for click-events on button
btn.addEventListener('click', function(){
    // use let so it can be updated with the loop
    let hexColor = '#';

    // loop 6 times, we want 6 values for the hex
    for(let i = 0; i < 6; i++){
        // add the value to the hexColor variable to keep the # and string datatype
        hexColor += hex[getRandomNumber()];
    }
    // update span with the hexcolor value
    color.textContent = hexColor;
    // update backgroundcolor with same value
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber(){
    // multiply random with length of hex array, and round down with floor
    return Math.floor(Math.random() * hex.length);
}