
const api_url = 'https://type.fit/api/quotes';
fetch(api_url)
    .then(response => response.json())
    .then(data => {
        const quote = document.getElementById('quote');
        const author = document.getElementById('author');
        const newQuoteBtn = document.getElementById('new-quote');
        const tweetBtn = document.getElementById('tweet-quote');
        newQuoteBtn.addEventListener('click', () => {
            const quoteIndex = Math.floor(Math.random() * data.length);
            quote.innerText = data[quoteIndex].text;
            author.innerText = data[quoteIndex].author;
        });

    })