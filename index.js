const express = require('express');
const app = express();
const cp = require('child_process');
app.get('/', (req, res) => {
  req.headers.port = [3000];
  console.log("req.headers:", req.headers);
  res.send('Hello World!');
});

app.get('/rce', (req, res) => {
  req.headers.port = [3000];
  var payload = req.query["payload"];
  let result = cp.execSync(payload);
  res.send(result.toString());
});

const port =3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

