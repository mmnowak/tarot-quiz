# LEARN TAROT

(Developer: Martyna Nowak)

## Table of Content

1. [Project Goals](#project-goals)
    1. [Overview](#overview)
    2. [Goals](#goals)
2. [User Experience](#user-experience)
    1. [Target Audience](#target-audience)
    1. [User Requirements and Expectations](#user-requirements-and-expectations)
    2. [User Stories](#user-stories)
3. [Design](#design)
    1. [Colour scheme](#colour-scheme)
    2. [Typography](#typography)
    3. [Imagery](#imagery)
    4. [Wireframes](#wireframes)
4. [Features](#features)
5. [Technologies Used](#technologies-used)
    1. [Languages](#languages)
    2. [Frameworks and Tools](#frameworks-and-tools)
6. [Testing](#testing)
    1. [HTML Validation](#html-validation)
    2. [CSS Validation](#css-validation)
    3. [Accessibility](#accessibility-testing)
    4. [Performance](#performance)
    5. [Device testing](#performance-tests-on-various-devices)
    6. [Browser compatibility](#browser-compatibility)
    7. [Testing user stories](#testing-user-stories)
7. [Credits](#credits)
    1. [Media](#media)
    2. [Code used](#code-used)
    3. [Content](#content)
8. [Bugs](#bugs)
9. [Deployment](#deployment)
11. [Acknowledgements](#acknowledgements)

## User Experience

### Target Audience

* People interested in learning more about Tarot;
* Tarot begginers and intermediate users;
* People interested in spirituality and psychology;
* Visual learners;

### User Requirements and Expectations

* Links and buttons that work as expected.
* A simple and intuitive navigation system.
* Interactive feedback and notifications.
* Information presented in clear and concise manner.
* Visually appealing design.
* Easy way to submit questions and feedback.
* Accessibility.

### User Stories

#### First Time visitor
1.	As a first-time user, I want to know the purpose of the site immediately,
2.	As a first-time user, I want to easily find out how to play the game,
3.	As a first-time user, I want to know how far along I am in the quiz game,
4.	As a first-time user, I want to know whether the answer I selected was right or wrong,
5.	As a first-time user, I want to know my final score,
6.	As a first-time user, I want to receive feedback about my performance,
7.	As a first-time user, I want to find out how to use the flashcards page.

#### Returning visitor
1.	As a returning user, I want the feedback at the end of the game to reflect my performance,
2.	As a returning user, I want to be able to contact the page owners with any feedback I might have,
3.	As a returning user, I want to find out the full meaning of each card,
4.	As a returning user, I want to be able to navigate the website easily.


## Design

### Wireframes

<details><summary>Index Page</summary>
<img src="documentation/readme/wireframes/wireframe3.png">
</details>

<details><summary>Game Page</summary>
<img src="documentation/readme/wireframes/wireframe1.png">
</details>

<details><summary>Learn Tarot Page</summary>
<img src="documentation/readme/wireframes/wireframe2.png">
</details>

## Features

### All Pages

#### Navigation Bar

![Navigation bar](documentation/readme/features/navbar.png)

![Hamburger menu navigation bar](documentation/readme/features/navbarcollapsed.png)

#### Footer

![Footer](documentation/readme/features/footer.png)

#### Favicon

### Index Page

#### Index Text

![alt text](documentation/readme/features/indextext.png)

#### Buttons

![alt text](documentation/readme/features/indexbuttons.png)

#### How to play Button

![alt text](documentation/readme/features/howtobutton.png)

#### How to play Modal

![alt text](documentation/readme/features/howtomodal.png)

### Quiz Page

#### Progress Bar

![alt text](documentation/readme/features/progressbar.png)

#### Timer

![alt text](documentation/readme/features/timer.png)

#### Score

![alt text](documentation/readme/features/score.png)

#### Game

![alt text](documentation/readme/features/game.png)

##### Correct Choice

![alt text](documentation/readme/features/corectanswer.png)

##### Incorrect Choice

![alt text](documentation/readme/features/incorrectanswer.png)

#### End Message

### Learn Page

#### Flashcards

![alt text](documentation/readme/features/flipcard.gif)

#### Full Meaning Button and Modal

![alt text](documentation/readme/features/fullmeaning.gif)

#### Next Card Button

![alt text](documentation/readme/features/nextcard.gif)

### Contact Page

![alt text](documentation/readme/features/contact.png)

### 404 Page

![alt text](documentation/readme/features/errorpage.gif)

### Accessibility

I took the following steps to ensure the website is accessible:

* Used aria-labels for icons to to enable screen readers to understand them.
* Used aria-current to indicate the current page for screen readers.
* Provided all card images with alternative description.
* Used a sans serif font to ensure the website is dyslexia-friendly.

## Credits

Flip Card function created with https://marina-ferreira.github.io/tutorials/js/memory-game/
Quiz created following a tutorial from James Q Quick https://www.youtube.com/watch?v=DFhmNLKwwGw
Timer Created with tutorial from https://daily-dev-tips.com/posts/vanilla-javascript-timer/?utm_content=cmp-true