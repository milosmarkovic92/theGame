import {shuffleHandler} from '../../utils/Shuffle';
import {UPDATE_COMPLETED_CARDS, UPDATE_OPEN_CARDS} from './actions';

const initialState = {
    cards: shuffleHandler(['A', 'A', '2', '2', '3', '3', '4', '4', '5', '5', '6', '6', '7', '7', '8', '8']),
    numOfRows: 4,
    numOfColumns: 4,
    completedCards: [],
    openCards: []
}
console.log(initialState.completedCards);
const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_OPEN_CARDS:
            return {
                ...state,
                openCards: action.payload
            }
        case UPDATE_COMPLETED_CARDS:
            return {
                ...state,
                completedCards: action.payload
            } 
        default:
            return state;
    }
};

export default rootReducer;