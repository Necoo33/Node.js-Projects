import path from "path";

function orderingIds(idOfWhat, dbPath){
    let databasePath = path.join(dbPath);

    let readingFile = require("fs").readFileSync(databasePath);

    let data = JSON.parse(readingFile);

    let newIdNum = data.length + 1;

    return `${idOfWhat}${newIdNum}`;
}

// this function takes 2 arguments, first argument is an identifier(for example, 
// if you want to give id to a feedback, you can set "f" it), second argument is 
// path of an ".json()" database file's path as argument. This function returns 
// the 1 plus of the length of that database or api which you passed to second   
// argument. it can be used only on arrays. you can assign that function to
// an id property that object you want to give ordered id.

// i do it for next.js api's but there is no reason for couldn't use on any other api's
// that uses node.js as base.

// Sample invoke and output;

/* 

if "/api/quotes" holds 5 objects:

invoke: orderingIds("q", "/api/quotes");

output: "q6"

*/