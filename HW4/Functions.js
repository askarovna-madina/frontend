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

function factorial(num){
    let multi=1;
    for(let i=1; i<num+1;i++){
        multi=multi*i
    }
    return multi
}
function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}