/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let cnt = 0;
    let startTime = new Date().getTime();
    for(let i = 0; i < n; i++){
        cnt += i;
    }
    let endTime = new Date().getTime();
    return (endTime-startTime)/1000;
}
console.log("a:"+calculateTime(10));
console.log("b:"+calculateTime(100));
console.log("c:"+calculateTime(1000));
console.log("d:"+calculateTime(10000));
console.log("e:"+calculateTime(100000));
console.log("f:"+calculateTime(10000000));
console.log("g:"+calculateTime(10000000));
console.log("h:"+calculateTime(10000000000000));