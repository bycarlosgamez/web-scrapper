const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const PORT = 8000;

const app = express();

const url = "";
const element = "";

axios(url)
  .then((res) => {
    const htmlData = res.data;
    const data = cheerio.load(htmlData);
    const articles = [];

    data(element, htmlData).each(() => {
      const title = data(this).text();
      const href = data(this).find("a").attr("href");
      articles.push({
        title,
        url,
      });
    });
  })
  .catch((err) => consolelog(`We encounter the error ${err}`));

app.listen(PORT, () =>
  console.log(`Server running on PORT ${PORT}, you better CATCH IT!!!`)
);
