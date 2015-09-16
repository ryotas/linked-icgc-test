var fs = require('fs');
var frisby = require('frisby');

//var inFile = process.argv[2]; // Query
var url = 'http://54.238.218.145:8890/sparql';

//var textQuery = 'PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> PREFIX icgc: <http://icgc.link/vocab/> PREFIX hgnc_vocabulary: <http://bio2rdf.org/hgnc_vocabulary:> PREFIX bio2rdf_vocabulary: <http://bio2rdf.org/bio2rdf_vocabulary:> SELECT DISTINCT ?item WHERE {?project icgc:donor_sex ?item} ORDER BY ?item';
//var textResult = '{ "head": { "link": [], "vars": ["item"] }, "results": { "distinct": false, "ordered": true, "bindings": [ { "item": { "type": "literal", "value": "" }}, { "item": { "type": "literal", "value": "female" }}, { "item": { "type": "literal", "value": "male" }} ] } }';

for (var i=1; i<=1; i++) {

  var strI = ("00" + i).slice(-3);
  var query = fs.readFileSync('./spec/' + strI + '.sql', 'utf8');
  var result = fs.readFileSync('./spec/' + strI + '.json', 'utf8');

  frisby.create('POST SPARQL')
    .post(url, {format:'json', query:query})
    .expectJSON(JSON.parse(result))
    .toss();
}
