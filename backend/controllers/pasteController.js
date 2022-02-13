const Paste = require("../models/PasteModel");
const validators = require("../utils/validators");

//Returns all the pastes from the db
async function getAllPastes() {
    try {
        const pastes = await Paste.find({});
        return pastes;
    } catch (error) {
        return error
    }
}

//Validates and adds a single paste to the db
async function addSinglePaste(pasteObj) {
    try {
        if (validators.validatePasteObject(pasteObj) && await isNewPaste(pasteObj)) {
            const paste = new Paste(pasteObj);
            await paste.save();
            return;
        }
        else {
            throw { message: "Invalid input" }
        }
    } catch (error) {
        return error
    }
}

//Recieves a pastes array and adds it to the db
async function addManyPastes(pastesArr) {
    try {
        for (let paste of pastesArr) {
            await addSinglePaste(paste);
        }
        return { message: `Pastes saved successfuly` }
    } catch (error) {
        return error
    }
}

//Returns the lastest paste added to the db (the paste with the latest date attribute)
async function getLatestPaste() {
    try {
        const latestPaste = await Paste.find().sort({ date: -1 }).limit(1)
        return latestPaste[0];
    } catch (error) {
        return error
    }
}

//Check if the recieved paste is new (its date attribute is after the latest paste date attr in the db)
async function isNewPaste(pasteObj) {
    const latestPaste = await getLatestPaste();
    const numOfPastes = await Paste.count({});
    if (numOfPastes === 0) {
        console.log("paste is new")
        return true;
    }
    else {
        return latestPaste.date < pasteObj.date
    }
}

//Gets all the pastes added after the input date
async function getPastesFromDate(date) {
    try {
        if (validators.isDate(date)) {
            const pastes = await Paste.find({
                date: {
                    $gte: date
                }
            })
            return pastes;
        }
        else {
            throw {message: "Invalid date"}
        }
    } catch (error) {
        return error;
    }
}

module.exports = {
    getAllPastes,
    getLatestPaste,
    addManyPastes,
    addSinglePaste,
    getPastesFromDate,
}