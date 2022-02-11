const axios = require("axios");
const cheerio = require("cheerio");

//Gets a page URL address and returns its HTML page data
async function getHtmlPage(pageURL) {
    try {
        const res = await axios.get(pageURL, {
            proxy: {
                host: "localhost",
                port: "8118"
            }
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

//Recieves a URL address and extracts all pastes from it
async function getPastesData(onionURL) {
    const pastesArray = [];
    for (let i = 1; i <= 7; i++) {
        const pastesHTML = await getHtmlPage(`${onionURL}?page=${i}`)
        const $ = await cheerio.load(pastesHTML);

        $(".col-sm-12").each((index, parentElem) => {
            const title = $(parentElem).find("div.pre-info.pre-header div.row div.col-sm-5 h4").text()
            const footerStr = $(parentElem).find("div.pre-info.pre-footer div.row div.col-sm-6").text();
            const author = footerStr.split(" ")[2];
            const date = getDateString(footerStr);
            const content = $(parentElem).find("div.well.well-sm.well-white.pre div.text ol").text();

            const pasteObj = {
                title: title,
                author: author,
                date: date,
                content: content
            }
            pastesArray.push(pasteObj)
        })
    }
    return pastesArray.slice(1, pastesArray.length - 1);
}

//Recieves the paste element's footer string and return its date as a Date object
function getDateString(footerStr) {
    const footerArr = footerStr.split(" ");
    const dateStr = footerArr[4] + " " + footerArr[5] + " " + footerArr[6] + " " + footerArr[7];
    return new Date(dateStr);
}

module.exports = {
    getPastesData,
}
