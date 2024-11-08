import express from "express";
const PORT = 8000;
let articleInfo = [
  {
    title: "learn-react",
    upvotes: 0,
  },
  {
    title: "learn-node",
    upvotes: 0,
  },
  {
    title: "learn-mongodb",
    upvotes: 0,
  },
];

const app = express();
app.use(express.json());


app.put("/api/articles/:name/upvote", (req, res) => {
    const {name} = req.params;
    const article = articleInfo.find(({title}) => name ===  title);
    article && article.upvotes++;

    res.send(`${ JSON.stringify(article) ?? 'no data'}`)
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
