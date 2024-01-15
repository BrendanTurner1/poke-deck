# PokeDeck
<div align="center">

PokeDeck
![Tests](https://badgen.net/badge/tests/passing/green?icon=github)

## 💾 Technologies Used
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Cypress](https://img.shields.io/badge/-cypress-%238D6748?style=for-the-badge&logo=cypress&logoColor=white)

## Collaborators
[Brendan Turner](https://github.com/BrendanTurner1) 

</div>
## Abstract
This application strives to present a simple set of pokemon data formatted into a nostalgic cardlike format. These cards are meant to be added to a deck for viewing on a separate page.

## Context
This project was assigned as a showcase project to develop the asignee's skills across multiple technologies. The goal was to create a simple user friendly app in react with robust testing and a reponsive layout. This project was completed in Week 5 of Mod 3 of the Front End Development program at Turing School of Software & Design.

## Preview
<img width="720" alt="image" src="https://github.com/BrendanTurner1/poke-deck/assets/23608422/e5e3d772-c067-4cf9-a07b-503720444d34">

## Page Setup
1. Clone the repository: Open a terminal window. Navigate to the directory where you want to clone the repository: `git clone (copied link)`
2. Install the dependencies: Run the following command in the cloned repository directory: `npm install`
3. Run the React app: Run the following command in the cloned repository directory: `npm start`
4. Open the app in your web browser by navigating to http://localhost:3000

## Learning Goals
- Developing a multi-page app solo
- Robust Cypress testing
- Responsive layout
- Fetch calls to a public api

## Wins
- Refactoring the code to be able to reuse the PokemonCard component on the Deck page
- Having the data displayed on multiple "pages" with navigation buttons
- Setting the data to a cleaner object inside the fetch call

## Challenges
- Needing a different id value for deck cards because multiple cards of the same api ID were allowed
- Refactoring code to allow for page size query for better Cypress testing
- Prop drilling a function that can change depending on where it is mounted, and having to make that function take in the same value type.
