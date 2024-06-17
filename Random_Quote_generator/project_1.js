let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: '“The only limit to our realization of tomorrow is our doubts of today.”',
        person: "Franklin D. Roosevelt"
    },
    {
        quote: '“In the end, we will remember not the words of our enemies, but the silence of our friends.”',
        person: "Martin Luther King Jr."
    },
    {
        quote: '“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”',
        person: "Ralph Waldo Emerson"
    },
    {
        quote: '“Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.”',
        person: "Albert Einstein"
    },
    {
        quote: '“The only thing necessary for the triumph of evil is for good men to do nothing.”',
        person: "Edmund Burke"
    },
    {
        quote: '“The best way to predict the future is to create it.”',
        person: "Peter Drucker"
    },
    {
        quote: '“Life is what happens when you\'re busy making other plans.”',
        person: "John Lennon"
    },
    {
        quote: '“Success is not final, failure is not fatal: It is the courage to continue that counts.”',
        person: "Winston Churchill"
    },
    {
        quote: '“You miss 100% of the shots you don\'t take.”',
        person: "Wayne Gretzky"
    },
    {
        quote: '“Be the change that you wish to see in the world.”',
        person: "Mahatma Gandhi"
    }
];


btn.addEventListener('click' , function(){
    
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})