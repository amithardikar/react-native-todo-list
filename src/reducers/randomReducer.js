
let randomReducer = function(random = {}, action) {
    switch (action.type) {
        case 'NEW_QUOTE':
            return action.quote
        default:
            return random
    }
}


export default randomReducer