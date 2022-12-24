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
function main() {
    let r=readLine();
    r=parseFloat(r);
    const pi=Math.PI;
    let area=pi*r*r;
    console.log(area)
    let perimeter=2*pi*r;
    console.log(perimeter);
    try {    
        PI = 0;
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}