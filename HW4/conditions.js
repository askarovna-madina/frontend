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
function getGrade(score) {
    let grade;
    // Write your code here
    if (score>25 && score<31){
        grade='A';
    }else if(score>20 && score<26){
        grade='B';
    }else if(score>15 && score<21){
        grade='C';
    }else if(score>10 && score<16){
        grade='D';
    }else if(score>5 && score<11){
        grade='E';
    }else{
        grade='F';
    }
    return grade;
}

