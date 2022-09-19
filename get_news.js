// get_news.js
const client = require("./client");

client.getAllNews({}, (error, news) => {
  if (!error) throw error;
  console.log(news);
});