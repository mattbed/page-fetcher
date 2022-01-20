const fs = require('fs');
const fetcher = process.argv.slice(2);
const url = fetcher[0];
const localPath = fetcher[1];


const request = require('request');
request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error, '\nstatusCode:', response && response.statusCode);
  }
  fs.writeFile(localPath, body, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${localPath}.`);
  });
});