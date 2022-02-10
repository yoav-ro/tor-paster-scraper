const Paste = require("../models/PasteModel");

async function getAllPastes() {
    try {
        const pastes = await Paste.find({});
        return pastes;
    } catch (error) {
        return error
    }
}

async function addSinglePaste(pasteObj) {
    try {
        if (validatePasteObject(pasteObj) && await isNewPaste(pasteObj)) {
            const paste = new Paste(pasteObj);
            await paste.save();
            return { message: "Paste saved successfuly" }
        }
        else {
            return { message: "Invalid input" }
        }
    } catch (error) {
        return error
    }
}

async function addManyPastes(pastesArr) {
    try {
        for (let paste of pastesArr) {
            await addSinglePaste(paste);
        }
        return { message: "Pastes saved successfuly" }
    } catch (error) {
        return error
    }
}

async function getLatestPaste() {
    try {
        const latestPaste = await Paste.find().sort({ date: -1 }).limit(1)
        return latestPaste[0];
    } catch (error) {
        return error
    }
}

function validatePasteObject(pasteObj) {
    if (!isValidString(pasteObj.title) || !isValidString(pasteObj.author) || !isValidString(pasteObj.content)) {
        return false;
    }
    if (!pasteObj.date || Object.prototype.toString.call(pasteObj.date) !== "[object Date]") {
        return false;
    }
    return true;
}

async function isNewPaste(pasteObj) {
    const latestPaste = await getLatestPaste();
    const numOfPastes= await Paste.count({});
    if (numOfPastes === 0) {
        console.log("paste is new")
        return true;
    }
    else {
        console.log(latestPaste.date.toGMTString(), pasteObj.date.toGMTString())
        return latestPaste.date < pasteObj.date
    }
}

function isValidString(str) {
    if (!str || typeof (str) !== "string" || str.length <= 0) {
        return false;
    }
    return true;
}

module.exports = {
    getAllPastes,
    getLatestPaste,
    addManyPastes,
    addSinglePaste,
}