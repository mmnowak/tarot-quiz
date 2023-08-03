const cardMeanings = document.getElementById("learn-card");

let cards = [
    '<img src="assets/images/tarot/fool.jpg" alt="The Fool"></img>',
    '<img src="assets/images/tarot/magician.jpg" alt="The Magician"></img>',
    '<img src="assets/images/tarot/priestess.jpg" alt="The High Priestess"></img>',
    '<img src="assets/images/tarot/empress.jpg" alt="The Empress"></img>',
    '<img src="assets/images/tarot/emperor.jpg" alt="The Emperor"></img>',
    '<img src="assets/images/tarot/hierophant.jpg" alt="The Hierophant"></img>',
    '<img src="assets/images/tarot/lovers.jpg" alt="The Lovers"></img>',
    '<img src="assets/images/tarot/chariot.jpg" alt="The Chariot"></img>',
    '<img src="assets/images/tarot/strenghth.jpg" alt="Strength"></img>',
    '<img src="assets/images/tarot/hermit.jpg" alt="The Hermit"></img>',
    '<img src="assets/images/tarot/wheel.jpg" alt="The Wheel of Fortune"></img>',
    '<img src="assets/images/tarot/justice.jpg" alt="Justice"></img>',
    '<img src="assets/images/tarot/hanged.jpg" alt="The Hanged Man"></img>',
    '<img src="assets/images/tarot/death.jpg" alt="Death"></img>',
    '<img src="assets/images/tarot/temperance.jpg" alt="Temperance"></img>',
    '<img src="assets/images/tarot/devil.jpg" alt="The Devil"></img>',
    '<img src="assets/images/tarot/tower.jpg" alt="The Tower"></img>',
    '<img src="assets/images/tarot/star.jpg" alt="The Star"></img>',
    '<img src="assets/images/tarot/moon.jpg" alt="The Moon"></img>',
    '<img src="assets/images/tarot/sun.jpg" alt="The Sun"></img>',
    '<img src="assets/images/tarot/judgement.jpg" alt="Judgement"></img>',
    '<img src="assets/images/tarot/world.jpg" alt="The World"></img>',
];

function showCard() {
    const cardIndex = Math.floor(Math.random() * cards.length);
    currentCard = cards[cardIndex];
    cardMeanings.innerHTML = currentCard;
};