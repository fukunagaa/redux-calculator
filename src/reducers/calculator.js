import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
    inputValue: 0,
    resultValue: 0,
    showingResutl: false,
};

const calculator = (state = initialAppState, action) => {
    if (action.type === actionTypes.INPUT_NUMBER) {
        return {
            ...state,
            inputValue: state.inputValue * 10 + action.number,
            showingResutl:false,
        };
    }else if (action.type === actionTypes.PLUS) {
        return {
            ...state,
            inputValue: 0,
            resultValue: state.resultValue + state.inputValue,
            showingResutl: true,
        };
    } else {
        return state;
    }
};

export default calculator;