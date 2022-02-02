// Code your solution here
// function findMatching1(drivers, str){
//   let newList = []

//   for (let i = 0; i < drivers.length; i++){

//     if (drivers[i].toLowerCase() == str.toLowerCase()){
//       newList.push(drivers[i])
//     } 
//   }

//   return newList;
// }

function findMatching(drivers, str){
  let newList = drivers.filter(driver => str.toLowerCase() == driver.toLowerCase())
  return newList
}

function fuzzyMatch(drivers, str){
  let newList = drivers.filter(driver => str == driver.slice(0, str.length))
  return newList
}

function matchName(drivers, str){
  let newList = drivers.filter(driver => str == driver.name)
  return newList
}

// function matchName2(drivers, str){
//   let newList = drivers.filter(function(driver){
//     str == driver.name
//   })
//   return newList
// }

// const drivers = [
//         {
//           name: 'Bobby',
//           hometown: 'Pittsburgh' },
//         {
//           name: 'Sammy',
//           hometown: 'New York' } ,
//         {
//           name: 'Sally',
//           hometown: 'Cleveland' },
//         {
//           name: 'Annette',
//           hometown: 'Los Angeles' },
//         {
//           name: 'Bobby',
//           hometown: 'Tampa Bay' }
//       ];



