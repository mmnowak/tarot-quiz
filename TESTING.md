# LEARN TAROT - Testing

![Am I Responsive](documentation/readme/amiresponsive.png)

(Developer: Martyna Nowak)

[Live Webpage](https://mmnowak.github.io/tarot-quiz/index.html)

This is the testing documentation for the TarotQuiz website. For the full README file, [click here.](https://github.com/mmnowak/tarot-quiz/blob/main/README.md)

## Table of Contents

1. [Introduction](#introduction)
2. [Automated Testing](#automated-testing)
    1. [HTML Validation](#html-validation)
    2. [CSS Validation](#css-validation)
    3. [JavaScript Validation](#javascript-validation)
    3. [Accessibility](#accessibility-testing)
    4. [Performance](#performance)
3. [Manual Testing](#manual-testing)
    1. [Device testing](#performance-tests-on-various-devices)
    2. [Browser compatibility](#browser-compatibility)
    3. [Testing user stories](#testing-user-stories)
    4. [Feature testing results table](#feature-testing-results-table)
4. [Bugs and fixes](#bugs-and-fixes)

## Introduction

## Automated Testing

### HTML Validation

The W3C Markup Validation Service was used to validate the HTML of the website. No errors were found.

See Scores:

[Index Page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmmnowak.github.io%2Ftarot-quiz%2Findex.html)

[Game Page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmmnowak.github.io%2Ftarot-quiz%2Fgame.html)

[Learn Page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmmnowak.github.io%2Ftarot-quiz%2Flearn.html)

[Contact Page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmmnowak.github.io%2Ftarot-quiz%2Fcontact.html)

[404 Page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmmnowak.github.io%2Ftarot-quiz%2F404.html)



### CSS Validation

The W3C Jigsaw CSS Validation Service was used to validate the css file for the website via file upload. No errors were found.

![Css Validation score showing no errors](documentation/testing/cssvalid.png)

### Javascript Validation

Quiz.js

![quiz.js](documentation/testing/jslintgame.png)

Learn.js

![learn.js](documentation/testing/jslintlearn.png)

Email.js

![quiz.js](documentation/testing/jslintemail.png)

Error.js

![quiz.js](documentation/testing/jslinterror.png)

### Accessibility Testing

The WAVE web accessibility evaluation tool by WebAIM was used to ensure the website is fully accessible. No errors were found.

See scores:

[Index.html](https://wave.webaim.org/report#/https://mmnowak.github.io/tarot-quiz/index.html)

[Game.html](https://wave.webaim.org/report#/https://mmnowak.github.io/tarot-quiz/game.html)

[Learn.html](https://wave.webaim.org/report#/https://mmnowak.github.io/tarot-quiz/learn.html)

[Contact.html](https://wave.webaim.org/report#/https://8000-mmnowak-myfulltemplate-lmfoz60052m.ws-eu104.gitpod.io/contact.html)

[404.html](https://wave.webaim.org/report#/https://8000-mmnowak-myfulltemplate-lmfoz60052m.ws-eu104.gitpod.io/404.html)


### Performance

Index page

![Lighthouse results for the index page](documentation/testing/lighthouse/lighthouseindex.png)

Game page

![Lighthouse results for the index page](documentation/testing/lighthouse/lighthousegame.png)

Learn page

![Lighthouse results for the index page](documentation/testing/lighthouse/lighthouselearn.png)

Contact page

![Lighthouse results for the index page](documentation/testing/lighthouse/lighthousecontact.png)

404 page

![Lighthouse results for the index page](documentation/testing/lighthouse/lighthouse404.png)

## Manual Testing

### Device testing
### Browser compatibility
### Testing user stories

#### First Time visitor
1.	As a first-time user, I want to know the purpose of the site immediately.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|:-----------:|:----------:|:-------------------:|:-----------------:|
| Index Page | Navigate to the index page | The index paragraph displays | Works as expected |

<details><summary>See more</summary>
<img src="documentation/readme/features/indextext.png">
</details>

---
2.	As a first-time user, I want to easily find out how to play the game.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|:-----------:|:----------:|:-------------------:|:-----------------:|
| How to play button | Navigate to the index and click the button | See instructions | Works as expected |

<details><summary>See more</summary>
<img src="documentation/testing/user-testing/us2.gif">
</details>

---
3.	As a first-time user, I want to know how far along I am in the quiz game.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|:-----------:|:----------:|:-------------------:|:-----------------:|
| Progress bar | Select an answer to progresss to the next question | Progress bar updates | Works as expected |

<details><summary>See more</summary>
<img src="documentation/testing/user-testing/us3.gif">
</details>

---
4.	As a first-time user, I want to know whether the answer I selected was right or wrong.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|:-----------:|:----------:|:-------------------:|:-----------------:|
| Game section | Select an answer | Selected answer is highlighted green for correct and red for incorrect | Works as expected |

<details><summary>See more</summary>
<img src="documentation/testing/user-testing/us4.gif">
</details>

---
5.	As a first-time user, I want to know my score.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|:-----------:|:----------:|:-------------------:|:-----------------:|
| Score count | Select the correct answer to increase the score | Score count increases by 1 for each correct answer | Works as expected |

<details><summary>See more</summary>
<img src="documentation/testing/user-testing/us5.gif">
</details>

---
6.	As a first-time user, I want to receive feedback about my performance.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|:-----------:|:----------:|:-------------------:|:-----------------:|
| Modal | Finish the game | The end game modal pops up with a final message | Works as expected |

<details><summary>See more</summary>
<img src="documentation/testing/user-testing/us6.gif">
</details>

---
7.	As a first-time user, I want to find out how to use the flashcards page.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|:-----------:|:----------:|:-------------------:|:-----------------:|
| Learn page | Navigate to the Learn page | See instructions | Works as expected |

<details><summary>See more</summary>
<img src="documentation/testing/user-testing/us7.png">
</details>


#### Returning visitor
8.	As a returning user, I want the feedback at the end of the game to reflect my performance.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|:-----------:|:----------:|:-------------------:|:-----------------:|
| Modal | Answer all the question | The end game modal displays the final score, time and a message relevant to user performance | Works as expected |

<details><summary>See more</summary>
<img src="documentation/testing/user-testing/us6.gif">
</details>

---
9.	As a returning user, I want to be able to contact the page owners with any feedback I might have.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|:-----------:|:----------:|:-------------------:|:-----------------:|
| Contact Page | Navigate to the contact page | Fill the form and click send | Works as expected |

<details><summary>See more</summary>
<img src="documentation/testing/user-testing/us9.gif">
</details>

---
10.	As a returning user, I want to find out the full meaning of each card.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|:-----------:|:----------:|:-------------------:|:-----------------:|
| See full meaning button | Click on the button | A modal displaying each card's full meaning pops up | Works as expected |

<details><summary>See more</summary>
<img src="documentation/testing/user-testing/us10.gif">
</details>

---
11.	As a returning user, I want to be able to navigate the website easily.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|:-----------:|:----------:|:-------------------:|:-----------------:|
| Navigation bar | Click on any link | Go to a corresponding page | Works as expected |
| Index buttons | Click on the buttons | Go to a corresponding page | Works as expected |
| End game modal buttons | Click on the button | Go to a corresponding page | Works as expected |
| Navigation bar | Click on the website name | Go to the index page | Works as expected |

<details><summary>See more</summary>
<img src="documentation/testing/user-testing/us11a.gif">
<img src="documentation/testing/user-testing/us11b.gif">
<img src="documentation/testing/user-testing/us11ca.gif">
<img src="documentation/testing/user-testing/us11cb.gif">
<img src="documentation/testing/user-testing/us11d.gif">
</details>

---
12. As the returning user, I want to be able to view the site on a range of device sizes.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|:-----------:|:----------:|:-------------------:|:-----------------:|
| Web page | Open the website on your device | The website displays correctly | Works as expected |

[See more](#device-testing)

---
13. As a returning user, I want to be able to easily find my way back if I encounter an error page.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|:-----------:|:----------:|:-------------------:|:-----------------:|
| 404 Page | Click on the go back home button | Go to the index page | Works as expected |
| 404 Page | Wait 10 seconds to be automatically redirected | Go to the index page | Works as expected |

<details><summary>See more</summary>
<img src="documentation/testing/user-testing/us13a.gif">
<img src="documentation/testing/user-testing/us13b.gif">
</details>



### Feature testing results table

## Bugs and fixes