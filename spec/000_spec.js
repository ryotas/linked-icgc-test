var fs = require('fs');
var frisby = require('frisby');

var url = 'http://localhost:8890/sparql';
var numTests = 1;

for (var i=1; i<=numTests; i++) {

  var strI = ("00" + i).slice(-3);
  var query = fs.readFileSync('./spec/' + strI + '.sql', 'utf8');
  var result = fs.readFileSync('./spec/' + strI + '.json', 'utf8');

  frisby.create('POST SPARQL')
    .post(url, {format:'json', query:query})
    .expectJSON(JSON.parse(result))
    .toss();
}
