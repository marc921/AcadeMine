const express = require('express');
const fs = require('fs'); 	// filesystem
const util = require('util');

const app = express();
const port = process.env.PORT || 5000;

app.get('/receiver', (req, res) => {
	const ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
  	fs.appendFile('visitors-data', `#DATE#${Date()}#IP#${ip}#REFERER#${req.header('referer')}#USER-AGENT#${req.header('user-agent')}\n`, function (err) {
	  if (err) throw err;
	  console.log('Saved!');
	});
	res.statusCode = 404;
	res.end();
});

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));


// Demo: Circular reference
var o = {};
o.o = o;

// Note: cache should not be re-used by repeated calls to JSON.stringify.
var cache = [];
JSON.stringify(o, function(key, value) {
    if (typeof value === 'object' && value !== null) {
        if (cache.indexOf(value) !== -1) {
            // Circular reference found, discard key
            return;
        }
        // Store value in our collection
        cache.push(value);
    }
    return value;
});
cache = null; // Enable garbage collection