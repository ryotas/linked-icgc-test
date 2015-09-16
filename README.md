# linked-icgc-test

## Executing Tests

Install packages.

    $ npm install frisby jasmine-node

Modify host name if necessary.

    $ vi ./spec/000_spec.js
    var url = 'http://...'

Execute tests.

    $ ./node_modules/jasmine-node/bin/jasmine-node .

## Adding Tests

Add new SPARQL queries as .sql files and their corresponding results as .json files.

    $ vi ./spec/0XX.sql
    $ vi ./spec/0XX.json

Modify the total number of test cases.

    $ vi ./spec/000_spec.js
    var numTests = XX;
