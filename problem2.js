// changing these words morning, afternoon, evening and night according to time...
let time = new Date();
let hours = time.getHours();
let greet;

if (hours >= 4 && hours < 12) {
    greet = 'morning';
}
else if (hours >= 12 && hours < 16) {
    greet = 'after noon';
}
else if (hours >= 16 && hours < 22) {
    greet = 'evening'
}
else {
    greet = 'night'
}

document.getElementById("greet").innerHTML = greet;


// getting random quotes and background colors...
let btn = document.getElementById("next_btn");
let quote = document.getElementById("quote_line");
let bgColor = document.getElementById("container");

let quotes = [
    '"When you have a dream, you have got to grab it and never let go." — Carol Burnett',

    '"Nothing is impossible. The word itself says "I"m possible!" — Audrey Hepburn',

    '"There is nothing impossible to they who will try." — Alexander the Great',

    '"The bad news is time flies. The good news is you are the pilot." — Michael Altshuler',

    '"Life has got all those twists and turns. You have got to hold on tight and off you go." — Nicole Kidman',

    '"Keep your face always toward the sunshine, and shadows will fall behind you." — Walt Whitman',

    '"Success is not final, failure is not fatal: it is the courage to continue that counts." — Winston Churchill',

    '"You define your own life. Do not let other people write your script." — Oprah Winfrey',

    '"You are never too old to set another goal or to dream a new dream." — Malala Yousafzai',

    '"Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on." — Lady Gaga'
]

let colors = ["#9e0909","#9e0959","#8f6207","#6f078f","#386b07","#1b076b","#076b42","#07136b","#292a36","#910707"]


// by using onclick="output()" as attribute calling the function in button
function output() {
    let random = Math.floor(Math.random() * quotes.length);

    let outputQuote = quotes[random];
    quote.innerHTML = outputQuote;

    let outputColor = colors[random];
    quote.style.color = outputColor;
    btn.style.backgroundColor = outputColor;
    bgColor.style.backgroundColor = outputColor;
    
}