import { SquareType } from "../caro";

const getPatterns = (line: SquareType[], patternDic: any, sym: string) => {
    let i = 0;
    let s = "";
    while (i < line.length) {
        if (line[i] === sym) {
            s += sym;
        }
        if (line[i] !== sym || i === line.length - 1) {
            if (s in patternDic) {
                patternDic[s]++;
            } else {
                patternDic[s] = 1;
            }
            s = "";
        }
        i++;
    }
};

// Lấy theo hàng
const getPatternForRow = (patternDic: any, B: SquareType[][]) => {
    for (let i = 0; i < B.length; i++) {
        getPatterns(B[i], patternDic, "X");
    }
    for (let i = 0; i < B.length; i++) {
        getPatterns(B[i], patternDic, "O");
    }
};

// Lấy theo cột
const getPatternForColumn = (patternDic: any, B: SquareType[][]) => {
    const T = B[0].map((_, colIndex) => B.map((row) => row[colIndex]));
    for (let i = 0; i < T.length; i++) {
        getPatterns(T[i], patternDic, "X");
    }
    for (let i = 0; i < T.length; i++) {
        getPatterns(T[i], patternDic, "O");
    }
};

// Lấy theo hàng chéo
const getPatternForDiagonal = (patternDic: any, B: SquareType[][]) => {
    const getDiagonal = (matrix: SquareType[][], reverse: boolean = false) => {
        const diagonals: SquareType[][] = [];
        const n = matrix.length;
        const m = matrix[0].length;
        for (let k = 0; k <= n + m - 2; k++) {
            const diagonal: SquareType[] = [];
            for (let j = 0; j <= k; j++) {
                const i = k - j;
                if (i < n && j < m) {
                    diagonal.push(reverse ? matrix[n - i - 1][j] : matrix[i][j]);
                }
            }
            diagonals.push(diagonal);
        }
        return diagonals;
    };

    const diagonals = getDiagonal(B);
    const reverseDiagonals = getDiagonal(B, true);

    diagonals.forEach((diagonal) => getPatterns(diagonal, patternDic, "O"));
    reverseDiagonals.forEach((diagonal) => getPatterns(diagonal, patternDic, "O"));
    diagonals.forEach((diagonal) => getPatterns(diagonal, patternDic, "X"));
    reverseDiagonals.forEach((diagonal) => getPatterns(diagonal, patternDic, "X"));
};

const getAllPatterns = (B: SquareType[][]): any => {
    const patternDic: any = {};
    getPatternForRow(patternDic, B);
    getPatternForColumn(patternDic, B);
    getPatternForDiagonal(patternDic, B);
    return patternDic;
};

const gameOver = (state: SquareType[]) => {
    return state.every((cell) => cell !== null);
};

const Around = (B: SquareType[],size:number) => {
    const E2: number[] = [];
    const E = B.map((cell, index) => (cell === null ? index : -1)).filter((index) => index !== -1);
    for (let a = 0; a < size; a++) {
        for (let b = 0; b < size; b++) {
            const index = a * size + b;
            if (B[index] === "X" || B[index] === "O") {
                E2.push(index - size - 1, index - size, index - size + 1, index - 1, index + 1, index + size - 1, index + size, index + size + 1);
            }
        }
    }
    return E.filter((e) => E2.includes(e));
};
const convertArrayTo2DStringArray = (arr: SquareType[], size: number): SquareType[][] => {
    const result: SquareType[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        const row = arr.slice(i, i + size).map((num) => num);
        result.push(row);
    }
    return result;
};
const getX = (B: SquareType[],size:number) => {
    const newArr = convertArrayTo2DStringArray(B, size);
    const patternDic = getAllPatterns(newArr);
    let score = 0;
    if (patternDic["X"]) score += 1 * patternDic["X"];
    if (patternDic["XX"]) score += 10 * patternDic["XX"];
    if (patternDic["XXX"]) score += 100 * patternDic["XXX"];
    if (patternDic["XXXX"]) score += 1000 * patternDic["XXXX"];
    if (patternDic["XXXXX"]) return 999999;
    return score;
};

const getO = (B: SquareType[],size:number) => {
    const newArr = convertArrayTo2DStringArray(B, size);
    const patternDic = getAllPatterns(newArr);
    let score = 0;
    if (patternDic["O"]) score += 1 * patternDic["O"];
    if (patternDic["OO"]) score += 10 * patternDic["OO"];
    if (patternDic["OOO"]) score += 100 * patternDic["OOO"];
    if (patternDic["OOOO"]) score += 1000 * patternDic["OOOO"];
    if (patternDic["OOOOO"]) return 999999;

    return score;
};



export const minimax = (
    state: SquareType[],
    size: number,
    Maxplayer: boolean,
    depth = 1,
    alpha = -Infinity,
    beta = Infinity
): [number, number | null] => {
    if (depth === 0 || gameOver(state)) {
        return [getX(state,size) - getO(state,size), null];
    }

    const moves = Around(state,size);
    let bestValue = Maxplayer ? -Infinity : Infinity;
    let bestMove: number | null = null;

    for (const move of moves) {
        state[move] = Maxplayer ? "X" : "O";
        const [value1] = minimax(state,size, Maxplayer, depth - 1, alpha, beta);
        state[move] = !Maxplayer ? "X" : "O";
        const [value2] = minimax(state,size, Maxplayer, depth - 1, alpha, beta);
        state[move] = null
        if (Maxplayer) {
            const value = value1;
            if (value > bestValue) {
                bestValue = value;
                bestMove = move;
            }
            alpha = Math.max(alpha, value);
            if (alpha >= beta) break;
        } else {
            const value = value1 - value2;

            if (value < bestValue) {
                bestValue = value;
                bestMove = move;
            }
            beta = Math.min(beta, value);
            if (alpha >= beta) break;
        }
    }

    return [bestValue, bestMove];
};
