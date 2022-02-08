const axios = require("axios");
const cheerio = require("cheerio");

const onionURL = "http://strongerw2ise74v3duebgsvug4mehyhlpa7f6kfwnas7zofs3kov7yd.onion/all"

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

async function getPastesData(onionURL) {
    const pastesArray = [];
    const pastesHTML = await getHtmlPage(onionURL)
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
    return pastesArray.slice(1, pastesArray.length - 1);
}

function getDateString(footerStr) {
    const footerArr = footerStr.split(" ");
    const dateStr = footerArr[4] + " " + footerArr[5] + " " + footerArr[6] + " " + footerArr[7];
    return new Date(dateStr);
}

getPastesData(onionURL).then((value) => {
    console.log(value)
});
