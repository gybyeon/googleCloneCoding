const quotesArr = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote:
      " In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quote:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison",
  },
  {
    quote:
      "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    author: "Dr. Seuss",
  },
  {
    quote:
      "I believe we are here on the planet Earth to live, grow up and do what we can to make this world a better place for all people to enjoy freedom.",
    author: "Rosa Parks ",
  },
  {
    quote:
      "Life is a mountain. Your goal is to find your path, not to reach the top.",
    author: "Maxime Lagacé",
  },
  {
    quote:
      "Life is from the inside out. When you shift on the inside, life shifts on the outside.",
    author: "Kamal Ravikant",
  },
  {
    quote:
      "Life is not a spectator sport. If you're going to spend your whole life in the grandstand just watching what goes on, in my opinion you're wasting your life.",
    author: "Jackie Robinson",
  },
  {
    quote:
      "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    author: "Winston S. Churchill",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotesArr[Math.floor(Math.random() * quotesArr.length)];

quote.innerHTML = `${todaysQuote.quote}`;
author.innerText = `- ${todaysQuote.author}`;
