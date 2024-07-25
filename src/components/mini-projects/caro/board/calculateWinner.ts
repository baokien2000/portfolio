
import { SquareType } from "../caro";

export interface IWinner{
    winner:SquareType; // SquareType = "X" | "O" | "Y" | null
    line:number[];
}


export default function calculateWinner(squares: SquareType[], size: number, index: number): IWinner | null {
    const directions = [
      { dx: 1, dy: 0 }, // Horizontal
      { dx: 0, dy: 1 }, // Vertical
      { dx: 1, dy: 1 }, // Diagonal (\)
      { dx: 1, dy: -1 } // Diagonal (/)
    ];
  
    const row = Math.floor(index / size);
    const col = index % size;
    const piece = squares[index];
  
    if (!piece) return null;
  
    for (const { dx, dy } of directions) {
      let count = 1;
      let line = [index]; // Start with the current index
      for (const step of [-1, 1]) {
        for (let i = 1; i <= 4; i++) {
          const newRow = row + dy * i * step;
          const newCol = col + dx * i * step;
          const newIndex = newRow * size + newCol;
          if (newRow < 0 || newRow >= size || newCol < 0 || newCol >= size || squares[newIndex] !== piece) break;
          count++;
          line.push(newIndex); // Add the index to the winning line
          if (count === 5) {
            return { winner: piece, line: line.sort((a, b) => a - b) }; // Sort the line for correct order
          }
        }
      }
    }
  
    return null;
  }