/*

given a list of iteams to be purchased at various stores, each store has various produce Departments

list = ["milk", "coffe", "floar", "cheese", "apples", "bread" ];

produce = [["eggs" : "food"], ["cake" : "bakery"], ["milk" : "diary"], ["cheese" : "diary"], ["apples" : "fruits"], ["floar" : "groceries"], ["coffee" : "groceries"], ["carrots" : "vegitables"], ["strawberries" : "fruits"],]

loop through the list and if the iteams are in different procude category consider that as a different trip,
 now considering the list to have 6 iteams we ned to do six trips, write an algorithm to categorize all similar
 departments in a department store and retur the number of trips saved.
*/

const shopping = (products, list) => {
  let obj = {};
  let prevDepartment = "";
  for(var i = 0; i< list.length; i ++){
    for(var j = 0; j < products.length; j ++){
      if(products[j][0] === list[i]){
          if(prevDepartment !== products[j][1]){
            prevDepartment = products[j][1];
              if(obj[products[j][1]]){
                obj[products[j][1]] = obj[products[j][1]] + 1;
                  }else{
                obj[products[j][1]] = 1;
                }
          }
      }
    }
    list[i]
  }
  let totalTripsArr = Object.values(obj);
  let numm = 0;
  totalTripsArr.forEach(eachTrip => {numm  = numm + eachTrip});
  return (numm - totalTripsArr.length);
}
