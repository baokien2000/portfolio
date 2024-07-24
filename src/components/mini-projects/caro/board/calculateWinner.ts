// import { SquareType } from "../caro";

// export interface IWinner{
//     winner:SquareType; // SquareType = "X" | "O" | "Y" | null
//     line:number[];
// }

// export default function calculateWinner(squares:SquareType[],size?:number):IWinner | null {
//     const lines = [
//         //Ngang
//         [0, 1, 2, 3, 4],
//         [12, 13, 14, 15, 16],
//         [24, 25, 26, 27, 28],
//         [36, 37, 38, 39, 40],
//         [48, 49, 50, 51, 52],

//         //Thang
//         [0, 12, 24, 36, 48],
//         [1, 13, 25, 37, 49],
//         [2, 14, 26, 38, 50],
//         [3, 15, 27, 39, 51],
//         [4, 16, 28, 40, 52],

//         // Xeo \
//         [0, 13, 26, 39, 52],

//         // Xeo /
//         [4, 15, 26, 37, 48],

//     ];
//     let WinLine:number[][] = [];
//     for (let i = 0; i < 8; i++) {
//         let line = JSON.parse(JSON.stringify(lines));
//         line.map((j:number[]) => {
//             j[0] += i;
//             j[1] += i;
//             j[2] += i;
//             j[3] += i;
//             j[4] += i;
//         });
//         WinLine = [...WinLine, ...line]
//     }
//     let Win:number[][] = []
//     for (let i = 0; i < 8; i++) {
//         let line = JSON.parse(JSON.stringify(WinLine));
//         line.map((j:number[]) => {
//             j[0] += (i * 12);
//             j[1] += (i * 12);
//             j[2] += (i * 12);
//             j[3] += (i * 12);
//             j[4] += (i * 12);
//         });
//         Win = [...Win, ...line]

//     }

//     for (let i = 0; i < Win.length; i++) {
//         const [a, b, c, d, e] = Win[i];
//         if (squares[a] && squares[a] === squares[b] &&
//             squares[a] === squares[c] && squares[a] === squares[d] && squares[a] === squares[e]) {
//             return {
//                 winner: squares[a],
//                 line: [a, b, c, d, e]
//             };
//         }
//     }
//     return null;
// }


import { SquareType } from "../caro";

export interface IWinner {
  winner: SquareType; // SquareType = "X" | "O" | "Y" | null
  line: number[];
}

export default function calculateWinner(squares: SquareType[], size: number): IWinner | null {
  const winConditions: number[][] = [];

  // Generate horizontal win conditions
  for (let row = 0; row < size; row++) {
    for (let col = 0; col <= size - 5; col++) {
      winConditions.push([row * size + col, row * size + col + 1, row * size + col + 2, row * size + col + 3, row * size + col + 4]);
    }
  }

  // Generate vertical win conditions
  for (let col = 0; col < size; col++) {
    for (let row = 0; row <= size - 5; row++) {
      winConditions.push([row * size + col, (row + 1) * size + col, (row + 2) * size + col, (row + 3) * size + col, (row + 4) * size + col]);
    }
  }

  // Generate diagonal (\) win conditions
  for (let row = 0; row <= size - 5; row++) {
    for (let col = 0; col <= size - 5; col++) {
      winConditions.push([row * size + col, (row + 1) * size + col + 1, (row + 2) * size + col + 2, (row + 3) * size + col + 3, (row + 4) * size + col + 4]);
    }
  }

  // Generate diagonal (/) win conditions
  for (let row = 0; row <= size - 5; row++) {
    for (let col = 4; col < size; col++) {
      winConditions.push([row * size + col, (row + 1) * size + col - 1, (row + 2) * size + col - 2, (row + 3) * size + col - 3, (row + 4) * size + col - 4]);
    }
  }

  // Check for a winner
  for (let i = 0; i < winConditions.length; i++) {
    const [a, b, c, d, e] = winConditions[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d] && squares[a] === squares[e]) {
      return {
        winner: squares[a],
        line: [a, b, c, d, e]
      };
    }
  }

  return null;
}