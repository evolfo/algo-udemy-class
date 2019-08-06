process.stdin.resume();
process.stdin.setEncoding('utf-8');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function (data) {
    __input_stdin += data;
});

/*
 * Complete the function below.
 * Use console.log to print the result, you should not return from the function.
 * https://en.wikipedia.org/w/api.php?action=parse&section=0&prop=text&format=json&page=[topic]
 */
function getTopicCount(topic) {
	const https = require('https');
    
    
    https.get(`https://en.wikipedia.org/w/api.php?action=parse&section=0&prop=text&format=json&page=${topic}`, (resp) => {
    let data = '';
    let parsedJson 
    let counter = 0;

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        parsedJson = JSON.parse(data)

        console.log(parsedJson['parse']['text']['*'].split(topic).length - 1 )
    });

    }).on("error", (err) => {
    console.log("Error: " + err.message);
    });

}
process.stdin.on('end', function () {