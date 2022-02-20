const quotes = [
  {
    quote: "You can't make time. You can make a schedule.",
    author: "Noah Kagan",
  },
  {
    quote: "Explore ways while enjoying your free time.",
    author: "Tim Ferriss",
  },
  { quote: "You don't have to know all the answers.", author: "BJ Miller" },
  {
    quote: "Be nice to strangers. They are future sponsors.",
    author: "Jason Nemer",
  },
  { quote: "Quit carbohydrates and sugar.", author: "Peter Attia" },
  {
    quote: "Do what others consider too reckless.",
    author: "Adam Gazzaley",
  },
  {
    quote: "To give an impact, focus on really small details.",
    author: "Alexis Ohanian",
  },
  {
    quote: "Forget what you can't do even tomorrow.",
    author: "Matt Mullenweg",
  },
  {
    quote: "Reveal your wound. A healer must appear.",
    author: "Morgan Spurlock",
  },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[parseInt(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
