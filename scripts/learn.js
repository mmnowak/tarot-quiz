const cardMeanings = document.getElementById("card");

let cards = [
    '<div class="card-front"><img src="assets/images/tarot/fool.jpg" alt="The Fool"></img></div><div class="card-reverse"><p>Beginnings, innocence, spontaneity, a free spirit</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/magician.jpg" alt="The Magician"></img></div><div class="card-reverse"><p>Manifestation, resourcefulness, power, inspired action</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/priestess.jpg" alt="The High Priestess"></img></div><div class="card-reverse"><p>Intuition, sacred knowledge, divine feminine, the subconscious mind</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/empress.jpg" alt="The Empress"></img></div><div class="card-reverse"><p>Femininity, beauty, nature, nurturing, abundance</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/emperor.jpg" alt="The Emperor"></img></div><div class="card-reverse"><p>Authority, establishment, structure, a father figure</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/hierophant.jpg" alt="The Hierophant"></img></div><div class="card-reverse"><p>Spiritual wisdom, religious beliefs, conformity, tradition, institutions</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/lovers.jpg" alt="The Lovers"></img></div><div class="card-reverse"><p>Love, harmony, relationships, values alignment, choices</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/chariot.jpg" alt="The Chariot"></img></div><div class="card-reverse"><p>Control, willpower, success, action, determination</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/strenghth.jpg" alt="Strength"></img></div><div class="card-reverse"><p>Strength, courage, persuasion, influence, compassion</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/hermit.jpg" alt="The Hermit"></img></div><div class="card-reverse"><p>Soul-searching, introspection, being alone, inner guidance</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/wheel.jpg" alt="The Wheel of Fortune"></img></div><div class="card-reverse"><p>Good luck, karma, life cycles, destiny, a turning point</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/justice.jpg" alt="Justice"></img></div><div class="card-reverse"><p>Justice, fairness, truth, cause and effect, law</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/hanged.jpg" alt="The Hanged Man"></img></div><div class="card-reverse"><p>Pause, surrender, letting go, new perspectives</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/death.jpg" alt="Death"></img></div><div class="card-reverse"><p>Endings, change, transformation, transition</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/temperance.jpg" alt="Temperance"></img></div><div class="card-reverse"><p>Balance, moderation, patience, purpose</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/devil.jpg" alt="The Devil"></img></div><div class="card-reverse"><p>Shadow self, attachment, addiction, restriction, sexuality</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/tower.jpg" alt="The Tower"></img></div><div class="card-reverse"><p>Sudden change, upheaval, chaos, revelation, awakening</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/star.jpg" alt="The Star"></img></div><div class="card-reverse"><p>Hope, faith, purpose, renewal, spirituality</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/moon.jpg" alt="The Moon"></img></div><div class="card-reverse"><p>Illusion, fear, anxiety, subconscious, intuition</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/sun.jpg" alt="The Sun"></img></div><div class="card-reverse"><p>Positivity, fun, warmth, success, vitality</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/judgement.jpg" alt="Judgement"></img></div><div class="card-reverse"><p>Judgement, rebirth, inner calling, absolution</p></div>',
    '<div class="card-front"><img src="assets/images/tarot/world.jpg" alt="The World"></img></div><div class="card-reverse"><p>Completion, integration, accomplishment, travel</p></div>',
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