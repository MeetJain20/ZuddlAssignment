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
        case 'REARRANGE_TASK':
            const { target, element } = action.payload;

            if (target.title === element.title) {
                const targetIndex = state.findIndex((board) => board.boardid === target.path);
                const elementIndex = state.findIndex((board) => board.boardid === element.path);
                console.log(targetIndex, elementIndex);
                // Check if indices are valid
                if (targetIndex !== -1 && elementIndex !== -1) {
                    const updatedBoards = [...state];
                    [updatedBoards[targetIndex], updatedBoards[elementIndex]] = [updatedBoards[elementIndex], updatedBoards[targetIndex]];
                    console.log(updatedBoards);
                    return updatedBoards;
                } else {
                    // Handle invalid indices
                    console.error('Invalid indices:', targetIndex, elementIndex);
                    return state;
                }
            } else {
                const targetIndex = state.findIndex((board) => board.boardid === target.path);
                const elementIndex = state.findIndex((board) => board.boardid === element.path);
                const temp = { ...state[elementIndex], title: target.title };
                const updatedBoards = [
                    ...state.slice(0, elementIndex),
                    ...state.slice(elementIndex + 1),
                ];
                const updatedBoardsWithTemp = [
                    ...updatedBoards.slice(0, targetIndex),
                    temp,
                    ...updatedBoards.slice(targetIndex),
                ];
                return updatedBoardsWithTemp
            }

        default:
            return state;
    }
};

export default boardReducer;
