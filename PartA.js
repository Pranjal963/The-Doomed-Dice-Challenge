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
console.log("The total number of combinations that will be obtained when we will roll DiceA and DiceB will be");
console.log()
let count=0;
for(let i=0;i<DiceA.length;i++){
    for(let j=0;j<DiceB.length;j++){
        count++;
        let sum = (i+1) +(j+1);
        console.log(count + ") " +(i+1)+" "+" + "+(j+1)+" = "+sum);
    }
}
console.log();


/* 3) Calculate the Probability of all Possible Sums occurring among the number of
combinations from (2)*/

/* we have to calculate the probability of all possible sums occuring among the no. of combinations
P(Sum = 2) = 1/36
P(Sum = 3) = 2/36
P(Sum = 4) = 3/36
P(Sum = 5) = 4/36
P(Sum = 6) = 5/36.....
.........so on */

console.log("3) Calculate the Probability of all Possible Sums occurring among the number ofcombinations");
console.log();
console.log("The probability of all possible sums occuring among the no. of combinations")
let hashmap=new Map();
for(let i=0;i<DiceA.length;i++){
    for(let j=0;j<DiceB.length;j++){
        let sum = (i+1) +(j+1);
        if(hashmap.has(sum)){
            hashmap.set(sum,hashmap.get(sum)+1);
        }
        else{
            hashmap.set(sum,1);
        }
    }
}


for(let s=2;s<=12;s++){
    console.log("P( Sum = "+s+" ) = "+hashmap.get(s)+"/36");
}