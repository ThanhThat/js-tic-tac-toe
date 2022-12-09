import {
    getCellElementList,
    getCellElementAtIdx,
    getCurrentTurnElement,
    getGameStatusElement,
} from "./selectors.js";

import { TURN } from "./constants.js";

/**
 * Global variables
 */
let currentTurn = TURN.CROSS;
let isGameEnded = false;
let cellValues = new Array(9).fill("");

function toogleTurn() {
    // Toogle Turn
    currentTurn = currentTurn === TURN.CROSS ? TURN.CIRCLE : TURN.CROSS;

    // update turn on DOM element
    const currentElement = getCurrentTurnElement();
    if (currentElement) {
        currentElement.classList.remove(TURN.CIRCLE, TURN.CROSS);
        currentElement.classList.add(currentTurn);
    }
}

function handleCellClick(cell, index) {
    const isClicked =
        cell.classList.contains(TURN.CIRCLE) ||
        cell.classList.contains(TURN.CROSS);

    if (isClicked) return;

    // set selected cell
    cell.classList.add(currentTurn);

    // toogle turn
    toogleTurn();
}

function initCellElementList() {
    const cellElementList = getCellElementList();

    cellElementList.forEach((cell, index) => {
        cell.addEventListener("click", () => handleCellClick(cell, index));
    });
}

/**
 * TODOs
 *
 * 1. Bind click event for all cells
 * 2. On cell click, do the following:
 *    - Toggle current turn
 *    - Mark current turn to the selected cell
 *    - Check game state: win, ended or playing
 *    - If game is win, highlight win cells
 *    - Not allow to re-click the cell having value.
 *
 * 3. If game is win or ended --> show replay button.
 * 4. On replay button click --> reset game to play again.
 *
 */

(() => {
    // Bind click event for all li elements
    initCellElementList();

    // Bind click event for replay button

    // ...
})();
