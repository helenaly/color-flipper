// colors-array with four colors
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// the button
const btn = document.getElementById('btn');
// color-span with class color
const color = document.querySelector('.color');

// listens for click-events on btn
btn.addEventListener('click', function(){
    // get random number between 0 - 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}