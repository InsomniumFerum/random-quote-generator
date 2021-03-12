// Select the generate button
const generate = document.querySelector(".generate");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
// Get all quates
const quotesArr = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle.",
    author: "Marilyn Monroe",
  },
  {
    quote: "So many books so little time",
    author: "Frank Zappa",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
  },
];
// Creating Event
const getQuotes = () => {
  // Get random quoates
  let randomQuotes = Math.floor(Math.random() * quotesArr.length);
  quote.textContent = quotesArr[randomQuotes].quote;
  author.textContent = quotesArr[randomQuotes].author;
};
generate.addEventListener("click", getQuotes);
