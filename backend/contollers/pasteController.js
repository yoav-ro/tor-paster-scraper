const Paste = require("../models/PasteModel");

export async function getAllPastes() {
    try {
        const pastes = await Paste.find({});
        return pastes;
    } catch (error) {
        return error
    }
}

export async function addSinglePaste(pasteObj) {
    try {
        if (validatePasteObject(pasteObj)) {
            const paste = new Paste(pasteObj);
            await paste.save();
            return { message: "Paste saved successfuly" }
        }
        else{
            return { message: "Invalid input" }
        }
    } catch (error) {
        return error
    }
}

export async function addManyPastes(pastesArr) {
    try {
        for (let paste of pastesArr) {
            await addSinglePaste(paste);
        }
        return { message: "Pastes saved successfuly" }
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

function isValidString(str) {
    if (!str || typeof (str) !== "string" || str.length <= 0) {
        return false;
    }
    return true;
}