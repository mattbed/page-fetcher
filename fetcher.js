const fs = require('fs');
const input = process.argv.slice(2);
const request = require('request');


const fetcher = (url, localPath) => {
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
};

fetcher(input[0], input[1]);