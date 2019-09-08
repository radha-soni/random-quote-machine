function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
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

  const h1 = document.getElementById("quotes-placement");
  const author = document.getElementById("author");
  function getRandomQuote() {
    var i = getRandomInt(min, max);
    h1.textContent = data.quotes[i].quote;
    author.textContent = data.quotes[i].author;
  }

  getRandomQuote();
  document.getElementById("get-quote-btn").onclick = function() {
    getRandomQuote();
  };
};
request.send();
