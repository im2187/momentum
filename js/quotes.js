const quotes = [
    {
        quote: "Simple is Best.",
        author: "Horang2"
    },
    {
        quote: "Win is Zerg.",
        author: "Sea.ruby"
    },
    {
        quote: "Enjoy is Protoss.",
        author: "Sea.ruby"
    },
    {
        quote: "Cry is Terran.",
        author: "Sea.ruby"
    },
    {
        quote: "CSWU is assemble.",
        author: "Calm_Brain"
    },
    {
        quote: "Avengers is assemble.",
        author: "Captain America"
    },
    {
        quote: "Miracle Family.",
        author: "UKKZ"
    },
    {
        quote: "The ego of the Zerg Univ.",
        author: "CSWU"
    },
    {
        quote: "New Star : The Excel.",
        author: "JSA"
    },
    {
        quote: "Morning Star in Bucheon.",
        author: "BSU"
    },
    {
        quote: "Horizontal relationship.",
        author: "DP"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;