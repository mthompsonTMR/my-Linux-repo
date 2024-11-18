console.log("test2");

var wordnikUrl1 = "https://api.wordnik.com/v4/word.json/";
var word = "rainbow";
var wordnikUrl2 = "/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=YOUR_WORDNIK_API_KEY";

var giphyApiKey = "YOUR_GIPHY_API_KEY";

function setup() {
    noCanvas();
    //If you want to create a clickable link to fetch new words
    link = createA('#', word);
    link.mousePressed(askWordnik);
    wordGIF();
}

function wordGIF() {
    var wordnikAPI = wordnikUrl1 + word + wordnikUrl2;

    fetch(wordnikAPI)
        .then(response => response.json())
        .then(json => {
            // Check if the response contains related words
            if (json && json.length > 0 && json[0].words) {
                // Pick a random related word
                var relatedWords = json[0].words;
                var randomIndex = Math.floor(Math.random() * relatedWords.length);
                word = relatedWords[randomIndex];
                createP(word);

                var giphyAPI = `https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${word}&limit=1&offset=0&rating=g&lang=en`;

                return fetch(giphyAPI);
            } else {
                throw new Error("No related words found.");
            }
        })
        .then(response => response.json())
        .then(json => {
            if (json.data && json.data.length > 0) {
                var imgUrl = json.data[0].images.fixed_height.url;
                createImg(imgUrl);
            } else {
                createP("No GIFs found for the word: " + word);
            }
        })
        .catch(err => console.error(err));
}

function askWordnik() {
    loadJSON(wordnikUrl1 + word + wordnikUrl2, gotData);
}

function gotData(data) {
    if (data && data.length > 0) {
        var index1 = floor(random(0, data.length));
        var index2 = floor(random(0, data[index1].words.length));
        word = data[index1].words[index2];
        link.html(word);
    } else {
        console.error("No data received from Wordnik.");
    }
}
