const question = document.getElementById("card-question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);

let currentQuestion = {};
let acceptingAnswer = true;
let score = 0;
let questionCounter = 0;
let avaliableQuestions = [];

let questions = [
    {
        question: <img src="assets/images/tarot/fool.jpg" alt="The Fool"></img>
        choiceA: "Good luck, karma, life cycles, destiny, a turning point",
        choiceB: "Hope, faith, purpose, renewal, spirituality",
        choiceC: "Beginnings, innocence, spontaneity, a free spirit",
        choiceD: "Completion, integration, accomplishment, travel"
        answer: C
    },

    {
        question: <img src="assets/images/tarot/magician.jpg" alt="The Magician"></img>
        choiceA: "Manifestation, resourcefulness, power, inspired action",
        choiceB: "Spiritual wisdom, religious beliefs, conformity, tradition, institutions",
        choiceC: "Shadow self, attachment, addiction, restriction, sexuality",
        choiceD: "Endings, change, transformation, transition",
        answer: A
    },

    {
        question: <img src="assets/images/tarot/priestess.jpg" alt="The High Priestess"></img>
        choiceA: "Femininity, beauty, nature, nurturing, abundance",
        choiceB: "Intuition, sacred knowledge, divine feminine, the subconscious mind",
        choiceC: "Soul-searching, introspection, being alone, inner guidance",
        choiceD: "Positivity, fun, warmth, success, vitality",
        answer: B
    },

    {
        question: <img src="assets/images/tarot/empress.jpg" alt="The Empress"></img>
        choiceA: "Soul-searching, introspection, being alone, inner guidance",
        choiceB: "Spiritual wisdom, religious beliefs, conformity, tradition, institutions",
        choiceC: "Femininity, beauty, nature, nurturing, abundance",
        choiceD: "Illusion, fear, anxiety, subconscious, intuition",
        answer: C
    },

    {
        question: <img src="assets/images/tarot/emperor.jpg" alt="The Emperor"></img>
        choiceA: "Authority, establishment, structure, a father figure",
        choiceB: "Control, willpower, success, action, determination",
        choiceC: "Fairness, truth, cause and effect, law",
        choiceD: "Manifestation, resourcefulness, power, inspired action",
        answer: A
    },

    {
        question: <img src="assets/images/tarot/hierophant.jpg" alt="The Hierophant"></img>
        choiceA: "Soul-searching, introspection, being alone, inner guidance",
        choiceB: "Hope, faith, purpose, renewal, spirituality",
        choiceC: "Completion, integration, accomplishment, travel",
        choiceD: "Spiritual wisdom, religious beliefs, conformity, tradition, institutions",
        answer: D
    },

    {
        question: <img src="assets/images/tarot/lovers.jpg" alt="The Lovers"></img>
        choiceA: "Femininity, beauty, nature, nurturing, abundance",
        choiceB: "Positivity, fun, warmth, success, vitality",
        choiceC: "Love, harmony, relationships, values alignment, choices",
        choiceD: "Balance, moderation, patience, purpose",
        answer: C
    },

    {
        question: <img src="assets/images/tarot/chariot.jpg" alt="The Chariot"></img>
        choiceA: "Fairness, truth, cause and effect, law",
        choiceB: "Hope, faith, purpose, renewal, spirituality",
        choiceC: "Balance, moderation, patience, purpose",
        choiceD: "Control, willpower, success, action, determination",
        answer: D
    },

    {
        question: <img src="assets/images/tarot/strength.jpg" alt="Strength"></img>
        choiceA: "Completion, integration, accomplishment, travel",
        choiceB: "Courage, persuasion, influence, compassion",
        choiceC: "Control, willpower, success, action, determination"
        choiceD: "Fairness, truth, cause and effect, law",
        answer: B
    },

    {
        question: <img src="assets/images/tarot/hermit.jpg" alt="The Hermit"></img>
        choiceA: "Endings, change, transformation, transition",
        choiceB: "Illusion, fear, anxiety, subconscious, intuition",
        choiceC: "Soul-searching, introspection, being alone, inner guidance",
        choiceD: "Intuition, sacred knowledge, divine feminine, the subconscious mind",
        answer: C
    },

    {
        question: <img src="assets/images/tarot/wheel.jpg" alt="The Wheel of Fortune"></img>
        choiceA: "Completion, integration, accomplishment, travel",
        choiceB: "Endings, change, transformation, transition",
        choiceC: "Courage, persuasion, influence, compassion",
        choiceD: "Good luck, karma, life cycles, destiny, a turning point",
        answer: D
    },

    {
        question: <img src="assets/images/tarot/justice.jpg" alt="Justice"></img>
        choiceA: "Authority, establishment, structure, a father figure",
        choiceB: "Balance, moderation, patience, purpose",
        choiceC: "Fairness, truth, cause and effect, law",
        choiceD: "Shadow self, attachment, addiction, restriction, sexuality",
        answer: C
    },

    {
        question: <img src="assets/images/tarot/hanged.jpg" alt="The Hanged Man"></img>
        choiceA: "Endings, change, transformation, transition",
        choiceB: "Pause, surrender, letting go, new perspectives",
        choiceC: "Illusion, fear, anxiety, subconscious, intuition",
        choiceD: "Soul-searching, introspection, being alone, inner guidance",
        answer: B
    },

    {
        question: <img src="assets/images/tarot/death.jpg" alt="Death"></img>
        choiceA: "Sudden change, upheaval, chaos, revelation, awakening",
        choiceB: "Shadow self, attachment, addiction, restriction, sexuality",
        choiceC: "Rebirth, inner calling, absolution",
        choiceD: "Endings, change, transformation, transition",
        answer: D
    },

    {
        question: <img src="assets/images/tarot/temperance.jpg" alt="Temperance"></img>
        choiceA: "Control, willpower, success, action, determination",
        choiceB: "Spiritual wisdom, religious beliefs, conformity, tradition, institutions",
        choiceC: "Balance, moderation, patience, purpose",
        choiceD: "Pause, surrender, letting go, new perspectives",
        answer: C
    },

    {
        question: <img src="assets/images/tarot/devil.jpg" alt="The Devil"></img>
        choiceA: "Endings, change, transformation, transition",
        choiceB: "Shadow self, attachment, addiction, restriction, sexuality",
        choiceC: "Spiritual wisdom, religious beliefs, conformity, tradition, institutions",
        choiceD: "Intuition, sacred knowledge, divine feminine, the subconscious mind",
        answer: B
    },

    {
        question: <img src="assets/images/tarot/tower.jpg" alt="The Tower"></img>
        choiceA: "Sudden change, upheaval, chaos, revelation, awakening",
        choiceB: "Rebirth, inner calling, absolution",
        choiceC: "Illusion, fear, anxiety, subconscious, intuition",
        choiceD: "Fairness, truth, cause and effect, law",
        answer: A
    },

    {
        question: <img src="assets/images/tarot/star.jpg" alt="The Star"></img>
        choiceA: "Beginnings, innocence, spontaneity, a free spirit",
        choiceB: "Positivity, fun, warmth, success, vitality",
        choiceC: "Good luck, karma, life cycles, destiny, a turning point",
        choiceD: "Hope, faith, purpose, renewal, spirituality",
        answer: D
    },

    {
        question: <img src="assets/images/tarot/moon.jpg" alt="The Moon"></img>
        choiceA: "Illusion, fear, anxiety, subconscious, intuition",
        choiceB: "Love, harmony, relationships, values alignment, choices",
        choiceC: "Intuition, sacred knowledge, divine feminine, the subconscious mind"
        choiceD: "Femininity, beauty, nature, nurturing, abundance",
        answer: A
    },

    {
        question: <img src="assets/images/tarot/sun.jpg" alt="The Sun"></img>
        choiceA: "Good luck, karma, life cycles, destiny, a turning point",
        choiceB: "Positivity, fun, warmth, success, vitality",
        choiceC: "Beginnings, innocence, spontaneity, a free spirit",
        choiceD: "Authority, establishment, structure, a father figure",
        answer: B
    },

    {
        question: <img src="assets/images/tarot/judgement.jpg" alt="Judgement"></img>
        choiceA: "Rebirth, inner calling, absolution",
        choiceB: "Completion, integration, accomplishment, travel",
        choiceC: "Spiritual wisdom, religious beliefs, conformity, tradition, institutions",
        choiceD: "Fairness, truth, cause and effect, law",
        answer: A
    },

    {
        question: <img src="assets/images/tarot/world.jpg" alt="The World"></img>
        choiceA: "Good luck, karma, life cycles, destiny, a turning point",
        choiceB: "Manifestation, resourcefulness, power, inspired action",
        choiceC: "Sudden change, upheaval, chaos, revelation, awakening",
        choiceD: "Completion, integration, accomplishment, travel",
        answer: D
    },
]
