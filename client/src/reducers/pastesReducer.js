export default function pastesReducer(state = [], action) {
    switch (action.type) {
        case "ADD_PASTES":
            return [...state, ...action.newPastes];
        default:
            return state;
    }
}