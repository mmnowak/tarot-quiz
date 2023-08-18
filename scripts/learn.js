const cardMeanings = document.getElementById("card");
/**
 * Array of tarot cards and their meanings.
 * Each object contains a front face, which is a tarot card image,
 *  and a back face div which contains paragraph stating the meaning of the card. 
 * The meaning will be revealed when the card is clicked.
 */
var cards = [
    '<div class="card-front"><img id="fool" src="assets/images/tarot/fool.jpg" alt="The Fool"></img></div><div class="card-reverse"><p>Beginnings, innocence, spontaneity, a free spirit<br><button type="button" class="btn meaning-btn" data-bs-toggle="modal" data-bs-target="#fullmeaningmodal">See more</button></p></div>',
    '<div class="card-front"><img src="assets/images/tarot/magician.jpg" alt="The Magician"></img></div><div class="card-reverse"><p>Manifestation, resourcefulness, power, inspired action <br><button type="button" class="btn meaning-btn" data-bs-toggle="modal" data-bs-target="#fullmeaningmodal">Full Meaning</button></p></div>',
    '<div class="card-front"><img src="assets/images/tarot/empress.jpg" alt="The Empress"></img></div><div class="card-reverse"><p>Femininity, beauty, nature, nurturing, abundance <br><button type="button" class="btn meaning-btn" data-bs-toggle="modal" data-bs-target="#fullmeaningmodal">Full Meaning</button></p></div>',
    '<div class="card-front"><img src="assets/images/tarot/emperor.jpg" alt="The Emperor"></img></div><div class="card-reverse"><p>Authority, establishment, structure, a father figure <br><button type="button" class="btn meaning-btn" data-bs-toggle="modal" data-bs-target="#fullmeaningmodal">Full Meaning</button></p></div>',
    '<div class="card-front"><img src="assets/images/tarot/priestess.jpg" alt="The High Priestess"></img></div><div class="card-reverse"><p>Intuition, sacred knowledge, divine feminine, the subconscious mind <br><button type="button" class="btn meaning-btn" data-bs-toggle="modal" data-bs-target="#fullmeaningmodal">Full Meaning</button></p></div>',
    '<div class="card-front"><img src="assets/images/tarot/hierophant.jpg" alt="The Hierophant"></img></div><div class="card-reverse"><p>Spiritual wisdom, religious beliefs, conformity, tradition, institutions <br><button type="button" class="btn meaning-btn" data-bs-toggle="modal" data-bs-target="#fullmeaningmodal">Full Meaning</button></p></div>',
    '<div class="card-front"><img src="assets/images/tarot/lovers.jpg" alt="The Lovers"></img></div><div class="card-reverse"><p>Love, harmony, relationships, values alignment, choices <br><button type="button" class="btn meaning-btn" data-bs-toggle="modal" data-bs-target="#fullmeaningmodal">Full Meaning</button></p></div>',
    '<div class="card-front"><img src="assets/images/tarot/chariot.jpg" alt="The Chariot"></img></div><div class="card-reverse"><p>Control, willpower, success, action, determination <br><button type="button" class="btn meaning-btn" data-bs-toggle="modal" data-bs-target="#fullmeaningmodal">Full Meaning</button></p></div>',
    '<div class="card-front"><img src="assets/images/tarot/justice.jpg" alt="Justice"></img></div><div class="card-reverse"><p>Justice, fairness, truth, cause and effect, law <br><button type="button" class="btn meaning-btn" data-bs-toggle="modal" data-bs-target="#fullmeaningmodal">Full Meaning</button></p></div>',
    '<div class="card-front"><img src="assets/images/tarot/temperance.jpg" alt="Temperance"></img></div><div class="card-reverse"><p>Balance, moderation, patience, purpose <br><button type="button" class="btn meaning-btn" data-bs-toggle="modal" data-bs-target="#fullmeaningmodal">Full Meaning</button></p></div>',
    '<div class="card-front"><img src="assets/images/tarot/strenghth.jpg" alt="Strength"></img></div><div class="card-reverse"><p>Strength, courage, persuasion, influence, compassion <br><button type="button" class="btn meaning-btn" data-bs-toggle="modal" data-bs-target="#fullmeaningmodal">Full Meaning</button></p></div>',
    '<div class="card-front"><img src="assets/images/tarot/hermit.jpg" alt="The Hermit"></img></div><div class="card-reverse"><p>Soul-searching, introspection, being alone, inner guidance <br><button type="button" class="btn meaning-btn" data-bs-toggle="modal" data-bs-target="#fullmeaningmodal">Full Meaning</button></p></div>',
    '<div class="card-front"><img src="assets/images/tarot/wheel.jpg" alt="The Wheel of Fortune"></img></div><div class="card-reverse"><p>Good luck, karma, life cycles, destiny, a turning point <br><button type="button" class="btn meaning-btn" data-bs-toggle="modal" data-bs-target="#fullmeaningmodal">Full Meaning</button></p></div>',
    '<div class="card-front"><img src="assets/images/tarot/hanged.jpg" alt="The Hanged Man"></img></div><div class="card-reverse"><p>Pause, surrender, letting go, new perspectives <br><button type="button" class="btn meaning-btn" data-bs-toggle="modal" data-bs-target="#fullmeaningmodal">Full Meaning</button></p></div>',
    '<div class="card-front"><img src="assets/images/tarot/death.jpg" alt="Death"></img></div><div class="card-reverse"><p>Endings, change, transformation, transition <br><button type="button" class="btn meaning-btn" data-bs-toggle="modal" data-bs-target="#fullmeaningmodal">Full Meaning</button></p></div>',
    '<div class="card-front"><img src="assets/images/tarot/devil.jpg" alt="The Devil"></img></div><div class="card-reverse"><p>Shadow self, attachment, addiction, restriction, sexuality <br><button type="button" class="btn meaning-btn" data-bs-toggle="modal" data-bs-target="#fullmeaningmodal">Full Meaning</button></p></div>',
    '<div class="card-front"><img src="assets/images/tarot/tower.jpg" alt="The Tower"></img></div><div class="card-reverse"><p>Sudden change, upheaval, chaos, revelation, awakening <br><button type="button" class="btn meaning-btn" data-bs-toggle="modal" data-bs-target="#fullmeaningmodal">Full Meaning</button></p></div>',
    '<div class="card-front"><img src="assets/images/tarot/star.jpg" alt="The Star"></img></div><div class="card-reverse"><p>Hope, faith, purpose, renewal, spirituality <br><button type="button" class="btn meaning-btn" data-bs-toggle="modal" data-bs-target="#fullmeaningmodal">Full Meaning</button></p></div>',
    '<div class="card-front"><img src="assets/images/tarot/moon.jpg" alt="The Moon"></img></div><div class="card-reverse"><p>Illusion, fear, anxiety, subconscious, intuition <br><button type="button" class="btn meaning-btn" data-bs-toggle="modal" data-bs-target="#fullmeaningmodal">Full Meaning</button></p></div>',
    '<div class="card-front"><img src="assets/images/tarot/sun.jpg" alt="The Sun"></img></div><div class="card-reverse"><p>Positivity, fun, warmth, success, vitality <br><button type="button" class="btn meaning-btn" data-bs-toggle="modal" data-bs-target="#fullmeaningmodal">Full Meaning</button></p></div>',
    '<div class="card-front"><img src="assets/images/tarot/judgement.jpg" alt="Judgement"></img></div><div class="card-reverse"><p>Judgement, rebirth, inner calling, absolution <br><button type="button" class="btn meaning-btn" data-bs-toggle="modal" data-bs-target="#fullmeaningmodal">Full Meaning</button></p></div>',
    '<div class="card-front"><img src="assets/images/tarot/world.jpg" alt="The World"></img></div><div class="card-reverse"><p>Completion, integration, accomplishment, travel <br><button type="button" class="btn meaning-btn" data-bs-toggle="modal" data-bs-target="#fullmeaningmodal">Full Meaning</button></p></div>',
];

// Gets data from tarot_api by howlCode

const baseURL = "https://raw.githubusercontent.com/howlCode/tarot_api/master/lib/cards.json";

function getData(cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL);
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
};

// Loads a tarot card
function showCard() {
    cardMeanings.classList.remove('flip');
    cardIndex = Math.floor(Math.random() * cards.length);
    currentCard = cards[cardIndex];
    cardMeanings.innerHTML = currentCard;

// Shows the full meaning of a card retreived from tarot_api (see more in the README file)
function showFullMeaning(obj) {
    console.log(currentCard);
    console.log(cardIndex);
    cards.forEach(function callback(card, index) {
    document.getElementById("fullmeaning").innerText = obj[cardIndex].full_meaning
});
};

getData(showFullMeaning);

};

// Shows a card meaning
function flipCard() {
    cardMeanings.classList.toggle('flip');
};

cardMeanings.addEventListener('click', flipCard);

// Loads the first card straight away
window.onload = showCard();

