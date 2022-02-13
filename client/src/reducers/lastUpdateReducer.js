export default function lastUpdateReducer(state= new Date(), action){
    switch(action.type){
        case "SET_DATE":
            return action.newDate;
        default:
            return state;
    }
}