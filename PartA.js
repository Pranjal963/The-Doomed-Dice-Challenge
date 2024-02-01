/* 1) How many total combinations are possible? Show the math along with the code! */

/* Total number of possible combinations are 36 as we have 6 faces for each dice. So, total combinations would be {6*6=36} */

let DiceA=[1,2,3,4,5,6];
let DiceB=[1,2,3,4,5,6];

console.log();
console.log("1) How many total combinations are possible? Show the math along with the code!")
console.log();
let TotalCombinations=DiceA.length*DiceB.length;
console.log("TotalCombinations Possible are :" + " "+TotalCombinations);
console.log();

/* 2) 2. Calculate and display the distribution of all possible combinations that can be obtained when rolling both Die A and Die B together.
Show the math along with the code! */

/* The total number of combinations that will be obtained when we will roll DiceA and DiceB will be 
1) 1 + 1 = 2
2) 1 + 2 = 3
3) 1 + 3 = 4
4) 1 + 4 = 5
5) 1 + 5 = 6
6) 1 + 6 = 7
7) 2 + 1 = 3
8) 2 + 2 = 4...
..........so on*/

console.log("2) Calculate and display the distribution of all possible combinations that can be obtained when rolling both Die A and Die B together.Show the math along with the code");
console.log();
let count=0;
for(let i=0;i<DiceA.length;i++){
    for(let j=0;j<DiceB.length;j++){
        count++;
        let sum = (i+1) +(j+1);
        console.log(count + ") " +(i+1)+" "+" + "+(j+1)+" = "+sum);
    }
}