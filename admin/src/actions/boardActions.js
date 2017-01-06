export const BOARD_UPDATED= 'BOARD_UPDATED';
export const BOARD_CREATE = 'BOARD_CREATE';

export const boardUpdated = (board) => (
  {
    type: BOARD_UPDATED,
    board,
  }
);

export const boardCreate = (board) => (
  {
    type: BOARD_CREATE,
    board,
  }
);
