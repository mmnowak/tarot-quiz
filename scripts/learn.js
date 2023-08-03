const cardMeanings = document.getElementById("card");

let cards = [
    '<div class="card-front"><img src="assets/images/tarot/fool.jpg" alt="The Fool"></img></div><div class="card-reverse"><p>Beginnings, innocence, spontaneity, a free spirit</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/magician.jpg" alt="The Magician"></img></div><div class="card-reverse"><p>Beginnings, innocence, spontaneity, a free spirit</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/priestess.jpg" alt="The High Priestess"></img></div><div class="card-reverse"><p>Beginnings, innocence, spontaneity, a free spirit</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/empress.jpg" alt="The Empress"></img></div><div class="card-reverse"><p>Beginnings, innocence, spontaneity, a free spirit</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/emperor.jpg" alt="The Emperor"></img></div><div class="card-reverse"><p>Beginnings, innocence, spontaneity, a free spirit</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/hierophant.jpg" alt="The Hierophant"></img></div><div class="card-reverse"><p>Beginnings, innocence, spontaneity, a free spirit</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/lovers.jpg" alt="The Lovers"></img></div><div class="card-reverse"><p>Beginnings, innocence, spontaneity, a free spirit</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/chariot.jpg" alt="The Chariot"></img></div><div class="card-reverse"><p>Beginnings, innocence, spontaneity, a free spirit</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/strenghth.jpg" alt="Strength"></img></div><div class="card-reverse"><p>Beginnings, innocence, spontaneity, a free spirit</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/hermit.jpg" alt="The Hermit"></img></div><div class="card-reverse"><p>Beginnings, innocence, spontaneity, a free spirit</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/wheel.jpg" alt="The Wheel of Fortune"></img></div><div class="card-reverse"><p>Beginnings, innocence, spontaneity, a free spirit</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/justice.jpg" alt="Justice"></img></div><div class="card-reverse"><p>Beginnings, innocence, spontaneity, a free spirit</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/hanged.jpg" alt="The Hanged Man"></img></div><div class="card-reverse"><p>Beginnings, innocence, spontaneity, a free spirit</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/death.jpg" alt="Death"></img></div><div class="card-reverse"><p>Beginnings, innocence, spontaneity, a free spirit</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/temperance.jpg" alt="Temperance"></img></div><div class="card-reverse"><p>Beginnings, innocence, spontaneity, a free spirit</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/devil.jpg" alt="The Devil"></img></div><div class="card-reverse"><p>Beginnings, innocence, spontaneity, a free spirit</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/tower.jpg" alt="The Tower"></img></div><div class="card-reverse"><p>Beginnings, innocence, spontaneity, a free spirit</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/star.jpg" alt="The Star"></img></div><div class="card-reverse"><p>Beginnings, innocence, spontaneity, a free spirit</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/moon.jpg" alt="The Moon"></img></div><div class="card-reverse"><p>Beginnings, innocence, spontaneity, a free spirit</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/sun.jpg" alt="The Sun"></img></div><div class="card-reverse"><p>Beginnings, innocence, spontaneity, a free spirit</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/judgement.jpg" alt="Judgement"></img></div><div class="card-reverse"><p>Beginnings, innocence, spontaneity, a free spirit</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/world.jpg" alt="The World"></img></div><div class="card-reverse"><p>Beginnings, innocence, spontaneity, a free spirit</p></div>',
];

function showCard() {
    const cardIndex = Math.floor(Math.random() * cards.length);
    currentCard = cards[cardIndex];
    cardMeanings.innerHTML = currentCard;
};

function flipCard() {
    cardMeanings.classList.toggle('flip');
}

cardMeanings.addEventListener('click', flipCard);