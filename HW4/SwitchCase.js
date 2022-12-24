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

function getLetter(s) {
    let letter;
    let find;
    const set1= new Set(["a","e","i","o","u"]); 
    const set2= new Set(["b","c","d","f","g"]);
    const set3= new Set(["h","j","k","l","m"]);
    const set4= new Set(["n","p","q","r","s","t","v","w","x","y","z"]);
    if (set1.has(s[0])){
        find=0;
    }else if (set2.has(s[0])){
        find=1;
    }else if (set3.has(s[0])){
        find=2;
    }else if(set4.has(s[0])){
        find=3;
    }else{
        find=4;
    }
    switch(find){
        case 0:
            letter='A';
            break;
        case 1:
            letter='B';
            break;
        case 2:
            letter='C';
            break;
        case 3:
            letter='D';
            break;
    }
    return letter;
}

function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}