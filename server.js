const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist/angular-app'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/dist/angular-app/index.html");
});

app.get('/api/menSlides', (req, res ) => {
    res.json([
        {
          "id": "1",
          "name":"T-shirt",
          "price":30
        },
        {
          "id": "2",
          "price":10,
          "name":"Ololo"
        },
        {
          "id": "3",
          "name":"Test",
          "price":50
        },
        {
          "id": "4",
          "name":"Hat",
          "price":20
        },
        {
          "id": "5",
          "name":"Pants",
          "price":70
        },
        {
          "id": "6",
          "name":"Glasses",
          "price":170
        }
    ]);
});

app.get('/api/womenSlides', (req, res ) => {
  res.json([
    {
      "name":"T-shirt",
      "price":70,
      "id": "7",
      "desc": "some text"
    },
    {
      "price":10,
      "name":"Ololo",
      "id": "8",
      "desc": "some text"
    },
    {
      "name":"Test",
      "price":50,
      "id": "9",
      "desc": "some text"
    },
    {
      "name":"Hat",
      "price":20,
      "id": "10",
      "desc": ""
    },
    {
      "name":"Pants",
      "price":70,
      "id": "11",
      "desc": ""
    },
    {
      "name":"Glasses",
      "price":170,
      "id": "12",
      "desc": ""
    }
]);

app.get('*', (req, res)=> {
  res.redirect('/');
});

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})