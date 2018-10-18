const fs = require('fs');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const pathToJSON = path.resolve(__dirname, 'index.json');

// Body parser
app.use(bodyParser.json());

// Path logger
app.use((request, response, next) => {
  console.log('Path: ' + request.path);
  response.setHeader('Content-Type', 'application/json');
  next();
});

app.get('/items', (req, res) => {
    fs.readFile(pathToJSON, 'utf8', (error, contents) => {
    res.send(contents);
    });
});

app.post('/items', (req, res) => {
  fs.readFile(pathToJSON, 'utf8', (error, contents) => {
    const data = JSON.parse(contents);
    data.push(Object.assign({}, req.body));

    fs.writeFile(pathToJSON, JSON.stringify(data, '', 2), 'utf8', (error, contents) => {
        res.send(req.body);
        });
    });
});

app.put('/items/:id', (req, res) => {
    fs.readFile(pathToJSON, 'utf8', (error, contents) => {
    const data = JSON.parse(contents);

    data.splice((req.params.id-1),1,req.body);

    fs.writeFile(pathToJSON, JSON.stringify(data, '', 2), 'utf8', (error, contents) => {
        res.send(req.body);
        });
    });
});

app.delete('/items/:id', (req, res) => {
  fs.readFile(pathToJSON, 'utf8', (error, contents) => {
    const data = JSON.parse(contents);

    updatedData = data.filter(el => el.id !== req.params.id);

    fs.writeFile(pathToJSON, JSON.stringify(updatedData, '', 2), 'utf8', (error, contents) => {
      res.send(JSON.stringify({result: 'OK'}));
    });
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
});