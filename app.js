const express = require('express');

const port = process.env.PORT || 5000;

const app = express();

var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: true })

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
    
app.post('/contact', urlencodedParser, (req, res) => {
    let status = false;
    let message = "";
    if (true) {
      status = true;
      message = "Your message has been sent.";
    } else {
      status = false;
      message = "Your message has not been sent.";
    }
    
    res.send({
      status: status,
      message: message
    });
});

app.post('/newsletter', urlencodedParser, (req, res) => {
  let status = false;
  let message = "";
  if (true) {
    status = true;
    message = "Your message has been sent.";
  } else {
    status = false;
    message = "Your message has not been sent.";
  }
  
  res.send({
    status: status,
    message: message
  });
});
    
app.listen(port,()=>{
  console.log(`Server started at http://localhost:${port}`)
});