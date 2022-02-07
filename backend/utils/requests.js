const axios=require("axios");
const cheerio= require("cheerio");


const onionURL= "http://strongerw2ise74v3duebgsvug4mehyhlpa7f6kfwnas7zofs3kov7yd.onion/all"

async function getHtmlFeed(){
    try {
        const res =await axios.get(onionURL, {
            proxy:{
                host: "localhost",
                port: "8118"
            }
        });
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}
getHtmlFeed();