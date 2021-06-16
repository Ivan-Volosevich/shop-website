const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist/shop-website'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/dist/shop-website/index.html");
});

app.get('/api/menSlides', (req, res ) => {
    res.json('/dist/assets/mocks/menSlides.json');
});

app.get('/api/womenSlides', (req, res ) => {
  res.json('/dist/assets/mocks/womenSlides.json');
});

app.get('/api/childrenSlides', (req, res ) => {
  res.json('/dist/assets/mocks/childrenSlides.json');
});

app.get('*', (req, res)=> {
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})