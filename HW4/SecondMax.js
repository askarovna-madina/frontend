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
function getSecondLargest(nums) {
    let max=nums[0];
    let min=nums[0];
    for(let i=0; i<nums.length; i++){
        if(max<=nums[i]){
            max=nums[i];
        }
        if(min>=nums[i]){
            min=nums[i];
        }
    }
    for(let j=0; j<nums.length; j++){
        if(nums[j]==max){
            nums[j]=min;
        }
    }
    let newmax=nums[0];
    for(let j=0; j<nums.length; j++){
        if(nums[j]>=newmax){
            newmax=nums[j];
        }
    }
    return newmax;
}

