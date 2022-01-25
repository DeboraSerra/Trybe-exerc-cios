/**
* Given an array of potential voters, return an object with the following keys:
* youngPeople: number of people with ages between 18 and 25
* youngVotes: total of votes by people with this ages
* midPeople: number of people with ages between 26 and 55
* midVotes: total of votes by people with this ages
* oldPeople: number of people older than 55 years
* oldVotes: total of votes by people with this ages
*/

const voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:65, voted:true},
  {name:'Tami' , age: 64, voted:true},
  {name: 'Mary', age: 41, voted: false},
  {name: 'Becky', age: 53, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];

const votes = {
  youngPeople: 0,
  youngVotes: 0,
  midPeople: 0,
  midVotes: 0,
  oldPeople: 0,
  oldVotes: 0,
}
  
function voterResults(arr) {
  return arr.reduce((acc, item) => {
    if(item.age >= 18 && item.age <= 25) {
      acc.youngPeople += 1;
      if (item.voted) acc.youngVotes += 1;
    } else if (item.age >= 26 && item.age <= 55) {
      acc.midPeople += 1;
      if (item.voted) acc.midVotes += 1;
    } else {
      acc.oldPeople += 1;
      if (item.voted) acc.oldVotes += 1;
    }
    return acc;
  }, votes)
}
  
console.log(voterResults(voters));
