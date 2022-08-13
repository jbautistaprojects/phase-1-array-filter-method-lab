// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching(array, nameToFind) {
    let nameMatchArray = [];
    nameMatchArray = array.filter(array => array.toLowerCase().includes(nameToFind.toLowerCase()))
    return nameMatchArray 
    }

console.log(findMatching(drivers, 'Bobby'));
findMatching(drivers, 'Sammy');



function fuzzyMatch(arr, query) {
   let filterArray = arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
 //console.log(filterArray);
  let newName = [];

for (let name of filterArray){
  let firstTwo = [name[0]+name[1]];
 // console.log(name);

  if (query == firstTwo){
      newName.push(name);
  
  }
}
 return(newName)
}
fuzzyMatch(drivers, 'Sa'); 



function matchName(arr, driverName) {
    let filteredDrivers = arr.filter(val => val.name.includes(driverName));
    return(filteredDrivers)
   // let newArray =[];
    
  //  for (let name of filteredDrivers){
    //   newArray.push( name);
  //  }
  //  return newArray;
    
    }
    
    matchName(drivers, 'Bobby');
