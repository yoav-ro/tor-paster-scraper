//Checks if the input is a valid Date object
function isDate(date) {
    if (!date || Object.prototype.toString.call(date) !== "[object Date]") {
        return false;
    }
    return true;
}

//Checks is the input is a valid string (type string, length larger than 0)
function isValidString(str) {
    if (!str || typeof (str) !== "string" || str.length <= 0) {
        return false;
    }
    return true;
}

//Checks if the recieved paste object is in the required format
function validatePasteObject(pasteObj) {
    if (!isValidString(pasteObj.title) || typeof (pasteObj.author) !== "string" || !isValidString(pasteObj.content)) {
        return false;
    }
    if (!isDate(pasteObj.date)) {
        return false;
    }

    return true;
}

module.exports = {
    isDate,
    isValidString,
    validatePasteObject,
}