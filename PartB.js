/*1) Loki dooms your dice for his fun removing all the “Spots” off the dice.
No problem! You have the tools to re-attach the “Spots” back on the Dice.
However, Loki has doomed your dice with the following conditions:
● Die A cannot have more than 4 Spots on a face.
● Die A may have multiple faces with the same number of spots.
● Die B can have as many spots on a face as necessary i.e. even more than 6.
But in order to play your game, the probability of obtaining the Sums must remain the
same!
So if you could only roll P(Sum = 2) = 1/X, the new dice must have the spots reattached
such that those probabilities are not changed. */


/*        Die A cannot have more than 4 Spots on a face.
          Die A may have multiple faces with the same number of spots.
          No New_Die A[x] > 4
          Therefore considering all the faces of dice A having 4 Spots. */

 /*   Die B can have as many spots on a face as necessary i.e. even more than 6.
      Die B satisfies the condition therefore dieB is used as it is. */         

let DiceA=[1,2,3,4,5,6];
let DiceB=[1,2,3,4,5,6];

function frequency(DiceA, DiceB) {
    let frequencySum = new Map();

    for (let i = 0; i < DiceA.length; i++) {
        for (let j = 0; j < DiceB.length; j++) {
            let sum1 = DiceA[i] + DiceB[j];
            if (frequencySum.has(sum1)) {
                frequencySum.set(sum1, frequencySum.get(sum1) + 1);
            } else {
                frequencySum.set(sum1, 1);
            }
        }
    }
    
    return new Set([...frequencySum.values()]);

}

function newDice(DiceA, DiceB) {
    let idle = frequency(DiceA, DiceB);
    let newDiceA = new Array(6).fill(4); // Initialize Die A with all faces showing 4 spots

    let result;
    let status = false;
    let i = 0;

    while (!status) {
        newDiceA[i] = i + 1; // Try different configurations of Die A
        result = frequency(newDiceA, DiceB);
        status = arraysEqual(Array.from(idle), Array.from(result));
        i++;
    }

    function arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }

    console.log("New Dice A =", newDiceA);
    console.log("New Dice B =", DiceB);
}

newDice(DiceA, DiceB);