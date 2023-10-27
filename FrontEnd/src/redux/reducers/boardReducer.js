import BoardsDetail from "../../details/boards";

const initialState = Object.values(BoardsDetail);

const boardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NEW_POST':
            return [...state, action.payload];
        case 'EDIT_POST':
            const { boardid, description, img } = action.payload;
            return state.map(board => board.boardid === boardid ? { ...board, description: description, img: img } : board)
        case 'DELETE_POST':
            const { boardId: deleteBoardId } = action.payload;
            return state.filter(board => board.boardid !== deleteBoardId);
        default:
            return state;
    }
};

export default boardReducer;
