export const addPastes = (newPastes) => (
    {
        type: "ADD_PASTES",
        description: "Adds new pastes to the state",
        newPastes: newPastes,
    }
)