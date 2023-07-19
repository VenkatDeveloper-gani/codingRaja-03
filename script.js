    var quotes = [{
            text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
            author: "Nelson Mandela"
        },
        {
            text: "The way to get started is to quit talking and begin doing.",
            author: "Walt Disney"
        },
        {
            text: "If life were predictable it would cease to be life, and be without flavor.",
            author: "Eleanor Roosevelt"
        },
        {
            text: "Life is what happens when you're busy making other plans.",
            author: "John Lennon"
        },
        {
            text: "In the end, it's not the years in your life that count. It's the life in your years.",
            author: "Abraham Lincoln"
        }
    ];

    var currentQuoteIndex = -1;

    function getRandomQuote() {
        // Generate a random index
        var randomIndex = Math.floor(Math.random() * quotes.length);

        // Check if the same quote is already displayed
        if (randomIndex === currentQuoteIndex) {
            // Get another random index
            randomIndex = (randomIndex + 1) % quotes.length;
        }

        // Set the current quote index
        currentQuoteIndex = randomIndex;

        // Return the random quote
        return quotes[randomIndex];
    }

    function displayRandomQuote() {
        var quote = getRandomQuote();
        document.getElementById("quote-text").textContent = quote.text;
        document.getElementById("quote-author").textContent = "- " + quote.author;
    }

    document.addEventListener("DOMContentLoaded", function() {
        displayRandomQuote();

        // Event listener for the "Next Quote" button
        document.querySelector(".btn-next").addEventListener("click", function() {
            displayRandomQuote();
        });
    });
