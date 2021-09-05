const quotes = [
    {
        quote: "The aim of life is self-development. To realize one's nature perfectly - that is what each of us is here for.",
        author: "Oscar Wilde",
    },
    {
        quote: "The reason we all like to think so well of others is that we are all afraid for ourselves. The basis of optimism is sheer terror.",
        author: "Oscar Wilde",
    },
    {
        quote: "Always forgive your enemies; nothing annoys them so much.",
        author: "Oscar Wilde",
    },
    {
        quote: "A man's face is his autobiography. A woman's face is her work of fiction.",
        author: "Oscar Wilde",
    },
    {
        quote: "Anyone who lives within their means suffers from a lack of imagination.",
        author: "Oscar Wilde",
    },
    {
        quote: "I have the simplest of tastes. I am always satisfied with the best.",
        author: "Oscar Wilde",
    },
    {
        quote: "To love oneself is the beginning of a lifelong romance.",
        author: "Oscar Wilde",
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
    },
    {
        quote: "There is only one thing in the world worse than being talked about, and that is not being talked about.",
        author: "Oscar Wilde",
    },
    {
        quote: "You can never be overdressed or overeducated.",
        author: "Oscar Wilde",
    },
    {
        quote: "Whenever people agree with me, I always feel I must be wrong.",
        author: "Oscar Wilde",
    },
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde",
    },
    {
        quote: "Consistency is the last refuge of the unimaginative.",
        author: "Oscar Wilde",
    },
    {
        quote: "The seceret of life is to enjoy the pleasure of being terribly, terribly deceived.",
        author: "Oscar Wilde",
    },
    {
        quote: "It is absurd to divide people into good and bad. people are either charming or tedious.",
        author: "Oscar Wilde",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;