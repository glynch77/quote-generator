// const quotes = [
//   { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
//   { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
//   { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
//   { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
//   { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
//   { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
//   { text: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford" },
// ];

// 'const quoteEl = document.getElementById("quote");
// const authorEl = document.getElementById("author");
// const newQuoteBtn = document.getElementById("new-quote-btn");

// function showRandomQuote() {
//   const randomIndex = Math.floor(Math.random() * quotes.length);
//   const { text, author } = quotes[randomIndex];

//   quoteEl.textContent = `"${text}"`;
//   authorEl.textContent = `— ${author}`;
// }

// newQuoteBtn.addEventListener("click", showRandomQuote);

// // Show a quote as soon as the page loads
// showRandomQuote();'

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote-btn");

const API_KEY = 'FCqJbHKe2ZWvznDkSlOBpeiMZ9uIT4rPq0beVtgM'; // Replace with your actual API key
const API_URL = `https://api.api-ninjas.com/v2/randomquotes`;

async function showRandomQuote() {
  try {
    const response = await fetch(API_URL, {
      headers: { "X-Api-Key": API_KEY }
    });

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    const data = await response.json();
    const { quote, author } = data[0];

    quoteEl.textContent = `"${quote}"`;
    authorEl.textContent = `— ${author}`;
  } catch (error) {
    quoteEl.textContent = "Couldn't load a quote. Try again.";
    authorEl.textContent = "";
    console.error(error);
  }
}

newQuoteBtn.addEventListener("click", showRandomQuote);
showRandomQuote();