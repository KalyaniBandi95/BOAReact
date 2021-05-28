


export default function (state = null, action) {
    switch(action.type){
        case 'AUTHOR_SELECTED':
            return action.payload
    }
    return state;
}