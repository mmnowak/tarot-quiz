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
        choiceA:
        choiceB:
        choiceC:
        choiceD:
        answer:
    },

    {
        question: <img src="assets/images/tarot/magician.jpg" alt="The Magician"></img>
        choiceA:
        choiceB:
        choiceC:
        choiceD:
        answer:
    },

    {
        question: <img src="assets/images/tarot/priestess.jpg" alt="The High Priestess"></img>
        choiceA:
        choiceB:
        choiceC:
        choiceD:
        answer:
    },

    {
        question: <img src="assets/images/tarot/empress.jpg" alt="The Empress"></img>
        choiceA:
        choiceB:
        choiceC:
        choiceD:
        answer:
    },

    {
        question: <img src="assets/images/tarot/emperor.jpg" alt="The Emperor"></img>
        choiceA:
        choiceB:
        choiceC:
        choiceD:
        answer:
    },

    {
        question: <img src="assets/images/tarot/hierophant.jpg" alt="The Hierophant"></img>
        choiceA:
        choiceB:
        choiceC:
        choiceD:
        answer:
    },

    {
        question: <img src="assets/images/tarot/lovers.jpg" alt="The Lovers"></img>
        choiceA:
        choiceB:
        choiceC:
        choiceD:
        answer:
    },

    {
        question: <img src="assets/images/tarot/chariot.jpg" alt="The Chariot"></img>
        choiceA:
        choiceB:
        choiceC:
        choiceD:
        answer:
    },

    {
        question: <img src="assets/images/tarot/strength.jpg" alt="Strength"></img>
        choiceA:
        choiceB:
        choiceC:
        choiceD:
        answer:
    },

    {
        question: <img src="assets/images/tarot/hermit.jpg" alt="The Hermit"></img>
        choiceA:
        choiceB:
        choiceC:
        choiceD:
        answer:
    },

    {
        question: <img src="assets/images/tarot/wheel.jpg" alt="The Wheel of Fortune"></img>
        choiceA:
        choiceB:
        choiceC:
        choiceD:
        answer:
    },

    {
        question: <img src="assets/images/tarot/justice.jpg" alt="Justice"></img>
        choiceA:
        choiceB:
        choiceC:
        choiceD:
        answer:
    },

    {
        question: <img src="assets/images/tarot/hanged.jpg" alt="The Hanged Man"></img>
        choiceA:
        choiceB:
        choiceC:
        choiceD:
        answer:
    },

    {
        question: <img src="assets/images/tarot/death.jpg" alt="Death"></img>
        choiceA:
        choiceB:
        choiceC:
        choiceD:
        answer:
    },

    {
        question: <img src="assets/images/tarot/temperance.jpg" alt="Temperance"></img>
        choiceA:
        choiceB:
        choiceC:
        choiceD:
        answer:
    },

    {
        question: <img src="assets/images/tarot/devil.jpg" alt="The Devil"></img>
        choiceA:
        choiceB:
        choiceC:
        choiceD:
        answer:
    },

    {
        question: <img src="assets/images/tarot/tower.jpg" alt="The Tower"></img>
        choiceA:
        choiceB:
        choiceC:
        choiceD:
        answer:
    },

    {
        question: <img src="assets/images/tarot/star.jpg" alt="The Star"></img>
        choiceA:
        choiceB:
        choiceC:
        choiceD:
        answer:
    },

    {
        question: <img src="assets/images/tarot/moon.jpg" alt="The Moon"></img>
        choiceA:
        choiceB:
        choiceC:
        choiceD:
        answer:
    },

    {
        question: <img src="assets/images/tarot/sun.jpg" alt="The Sun"></img>
        choiceA:
        choiceB:
        choiceC:
        choiceD:
        answer:
    },

    {
        question: <img src="assets/images/tarot/judgement.jpg" alt="Judgement"></img>
        choiceA:
        choiceB:
        choiceC:
        choiceD:
        answer:
    },

    {
        question: <img src="assets/images/tarot/world.jpg" alt="The World"></img>
        choiceA:
        choiceB:
        choiceC:
        choiceD:
        answer:
    },
]
]
]
]
]
]
]
]
]
]
]
]
]
]
]
]
]
]
]
]
]
]