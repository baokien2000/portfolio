import { HistoryType, SquareType } from "../caro";

export interface IWinner{
    winner:SquareType;
    line:number[];
}

export default function calculateWinner(squares:SquareType[],callback?:(winner: SquareType)=> void):IWinner | null {
    const lines = [
        //Ngang
        [0, 1, 2, 3, 4],
        [12, 13, 14, 15, 16],
        [24, 25, 26, 27, 28],
        [36, 37, 38, 39, 40],
        [48, 49, 50, 51, 52],

        //Thang
        [0, 12, 24, 36, 48],
        [1, 13, 25, 37, 49],
        [2, 14, 26, 38, 50],
        [3, 15, 27, 39, 51],
        [4, 16, 28, 40, 52],

        // Xeo \
        [0, 13, 26, 39, 52],

        // Xeo /
        [4, 15, 26, 37, 48],

    ];
    let WinLine:number[][] = [];
    for (let i = 0; i < 8; i++) {
        let line = JSON.parse(JSON.stringify(lines));
        line.map((j:number[]) => {
            j[0] += i;
            j[1] += i;
            j[2] += i;
            j[3] += i;
            j[4] += i;
        });
        WinLine = [...WinLine, ...line]
    }
    let Win:number[][] = []
    for (let i = 0; i < 8; i++) {
        let line = JSON.parse(JSON.stringify(WinLine));
        line.map((j:number[]) => {
            j[0] += (i * 12);
            j[1] += (i * 12);
            j[2] += (i * 12);
            j[3] += (i * 12);
            j[4] += (i * 12);
        });
        Win = [...Win, ...line]

    }

    for (let i = 0; i < Win.length; i++) {
        const [a, b, c, d, e] = Win[i];
        if (squares[a] && squares[a] === squares[b] &&
            squares[a] === squares[c] && squares[a] === squares[d] && squares[a] === squares[e]) {
                callback && callback(squares[a]);
            return {
                winner: squares[a],
                line: [a, b, c, d, e]
            };
        }
    }
    return null;
}