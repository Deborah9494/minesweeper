# Mini Minesweeper 🧨

A simple Minesweeper game built with HTML, CSS, and JavaScript.

---

## Features

- 5x5 clickable grid  
- 3 random bombs  
- Clicking a bomb shows a “boom” and resets the grid  
- Clicking all safe cells wins the game and resets the grid  

---

## How to Play

1. Open `index.html` in your browser  
2. Click on the cells:  
   - 💥 Bomb → you lose, grid resets  
   - Safe cells → count toward winning  
3. Click all safe cells to win!  

---

## How to Customize

- Change grid size or number of bombs in `index.js`:

```js
const MATRIX_WIDTH = 5;
const MATRIX_HEIGHT = 5;
const NUM_BOMBS = 3;
