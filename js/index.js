const h1 = document.getElementById("quotes-placement");
const author = document.getElementById("author-info");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomColor() {
  return Math.floor(Math.random() * 256);
}

var request = new XMLHttpRequest();
request.open(
  "GET",
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
  true
);
request.onload = function() {
  var data = JSON.parse(this.response);
  let min = 0;
  let max = data.quotes.length;

  function getRandomQuote() {
    var i = getRandomInt(min, max);
    h1.textContent = data.quotes[i].quote;
    author.textContent = data.quotes[i].author;
  }

  let x = document.getElementsByClassName("quote-description");
  function unknownColor() {
    document.getElementById("quote-text-info").style.opacity = 0;
    var backgroundColor =
      "rgb(" +
      getRandomColor() +
      "," +
      getRandomColor() +
      " ," +
      getRandomColor() +
      ")";
    for (let i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = backgroundColor;
    }

    setTimeout(() => {
      getRandomQuote();
      document.getElementById("quote-text-info").style.color = backgroundColor;
      document.getElementById("quote-text-info").style.opacity = 1;
    }, 500);
  }
  unknownColor();

  document.getElementById("get-quote-btn").onclick = function() {
    unknownColor();
  };
};
request.send();
var tweetBtn = document.getElementById("tweetBtn");
tweetBtn.onclick = function() {
  tweetBtn.setAttribute(
    "href",
    "https://twitter.com/intent/tweet?hashtags=quote&text=" + h1.textContent
  );
};
