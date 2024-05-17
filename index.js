const express = require('express');
const app = express();

app.get('/', (req, res) => {
  req.headers.port = [3000];
  console.log("req.headers:", req.headers);
  res.send('Hello World!');
});

const port =3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

