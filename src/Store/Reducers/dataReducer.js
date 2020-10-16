import * as actionTypes from '../actionTypes';

const initialState = {
    posts: []
};

const dataReducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.SETDATA:
            return{
                ...state,
                posts: [...action.newArray]
            }
        default:
            return state;
    }
}

export default dataReducer;