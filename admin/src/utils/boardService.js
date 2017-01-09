// Credit for this nifty algorithm goes to: http://stackoverflow.com/a/24376236
const winLines = [
    [[1, 2], [4, 8], [3, 6]],
    [[0, 2], [4, 7]],
    [[0, 1], [4, 6], [5, 8]],
    [[4, 5], [0, 6]],
    [[3, 5], [0, 8], [2, 6], [1, 7]],
    [[3, 4], [2, 8]],
    [[7, 8], [2, 4], [0, 3]],
    [[6, 8], [1, 4]],
    [[6, 7], [0, 4], [2, 5]]
];

export const isWinningMove = (board, lastMove) => {
  const player = board[lastMove];
  for (let i = 0; i < winLines[lastMove].length; i++) {
    const line = winLines[lastMove][i];
    if(player === board[line[0]] && player === board[line[1]]) {
        return player;
    }
  }
  return 0;
};
