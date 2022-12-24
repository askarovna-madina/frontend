'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function vowelsAndConsonants(myStr) {
    for (let i=0; i<myStr.length; i++){
        if(myStr[i]=='i' || myStr[i]=='a' || myStr[i]=='e' || myStr[i]=='o' || myStr[i]=='u') {
        console.log(myStr[i])
    }
    }
    for (let j=0; j<myStr.length; j++){
        if (myStr[j]!='i' && myStr[j]!='a' && myStr[j]!='e' && myStr[j]!='o' && myStr[j]!='u') {
        console.log(myStr[j])
    }
}
}
function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}