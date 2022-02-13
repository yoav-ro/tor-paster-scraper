const axios = require("axios");

const baseURL = "http://localhost:3001";

export async function getAllPastes() {
    try {
        const pastes = await axios.get(`${baseURL}/get-pastes`);
        return pastes;
    } catch (error) {
        return error;
    }
}

export async function getPastesFromDate(date) {

}