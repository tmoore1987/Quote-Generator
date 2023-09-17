const quote = document.getElementById('quote');
const author = document.getElementById('author');
const btn = document.getElementById('btn');
const apiurl = "https://api.quotable.io/random";

async function getQuote() {
    try {
        btn.innerText = 'Loading...';
        btn.disabled = true;
        quote.innerText = 'Updating...';
        author.innerText = 'Updating...';
        const response = await fetch(apiurl);
        const data = await response.json();
        const quoteContent = data.content;
        const authorContent = data.author;
        quote.innerText = quoteContent;
        author.innerText = `~ ${authorContent}`;
        btn.innerText = 'Get new quote';
        btn.disabled = false;
        console.log(data);
    }   catch (error) {
        console.log(error);
        quote.innerText = 'Error. Please try again later.';
        author.innerText = 'Error. Please try again later.';
        btn.innerText = 'Get new quote';
        btn.disabled = false;
    }
}

getQuote();

btn.addEventListener('click', getQuote)


