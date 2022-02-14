export const addPastes = (newPastes) => (
    {
        type: "ADD_PASTES",
        description: "Adds new pastes to the state",
        newPastes: newPastes,
    }
)

export const initPastes = (pastes) => ({
    type: "INIT_PASTES",
    description: "Sets the pastes",
    pastes: pastes
})
