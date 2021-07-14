const DEFAULT_STATE = {
    name: 'TUYEN C'
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case 'UPDATE_NAME':
            return {...state,
            name: action.payload
        }
        default:
            return state;
    }
}