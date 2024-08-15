/////////////////////////////////////////////////////////////////
///////////////////////////// BOOTCAMP //////////////////////////
////////////////////// REQUIRED PRACTICE EXAM ///////////////////
/////////////////////////////////////////////////////////////////

let subscriptions = [
    {  // 0
      name: "HBOMax",
      type: 'streaming',
      costPerMonth: 14.99,
      cancel: false,
      users: [
        {
          ip: '184.190.92.50',
          lastAccessed: '5/22/2023'
        },
        {
          ip: '175.100.90.40',
          lastAccessed: '5/18/2023'
        }
      ]
    },
    { // 1
      name: 'Hulu',
      type: 'streaming',
      costPerMonth: 7.99,
      cancel: false,
       users: [
        {
          ip: '184.190.92.50',
          lastAccessed: '5/22/2023'
        },
      ]
    },
    { // 2
      name: 'Netflix',
      type: 'streaming',
      costPerMonth: 9.99,
      cancel: false,
       users: [
        {
          ip: '184.190.92.50',
          lastAccessed: '5/22/2023'
        },
        {
          ip: '175.100.90.40',
          lastAccessed: '5/18/2023'
        },
         {
           ip: '180.145.75.25',
           lastAccessed: '5/20/2023'
         }
      ]
    },
    { // 3
      name: 'Express VPN',
      type: 'software',
      costPerMonth: 12.95,
      cancel: false,
       users: [
        {
          ip: '184.190.92.50',
          lastAccessed: '5/22/2023'
        },
      ]
    },
    { // 4
      name: 'Adobe Premiere Pro',
      type: 'software',
      costPerMonth: 20.99,
      cancel: false,
       users: [
        {
          ip: '184.190.92.50',
          lastAccessed: '5/22/2023'
        },
      ]
    },
  ];
  
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #1 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////

  /*
  1. Create a function called `cancelSubscriptions` that takes in one parameter - `array` - that represents an array of subscription objects. 
  This function should iterate through the input array of subscriptions and set EVERY OTHER subscription object's `cancel` property to true, 
  but only if the cost of the subscription is more than 10 dollars.

- [ {check for cancellation}, {}, {check for cancellation}, {}, {check for cancellation}];
  */
  
  let cancelSubscriptions = function(array){
    // iterate through array, increment by 2 on each iteration to only check every other object
    for (let i = 0; i < array.length; i += 2) {
      // if cost per month is greater than 10 set value to cancel
      if (array[i].costPerMonth > 10) {
        array[i].cancel = true;
      }
    }
    // return array
    return array;
    
  };
  
  
  /*
  NOTE: If you test this function in the console, remember to comment 
  out the test because this function will DESTRUCTIVELY alter the subscriptions 
  array.
  */
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #2 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  
  /*
  2. Create a function called `subscriptionList` that takes in one parameter - `array` - 
  which represents an array of subscription objects. 
  This function should use the native reduce method to return a string that formats the subscriptions 
  like as such:
```
HBOMax - 14.99
Hulu - 7.99
Netflix - 9.99
Express VPN - 12.95
Adobe Premiere Pro - 20.99
*/
  
  let subscriptionList = function(array){
    return array.reduce((acc, curr) => {
      // acc is set to string so add name - costPerMonth with linebreak for each object to acc and return
      return acc += curr.name + ' - ' + curr.costPerMonth + '\n';
    }, '')

  };
  
  
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #3 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /*
  3. Create a function called `getSubscriptionObject` that takes in two parameters - 
  `array` and `name`. `array` represents an array of subscription objects; `name` is a string of a subscription (example: 'HBOMax'). 
  This function should use recursion to find the subscription object matching the input name. 
  If the subscriptio is found, the function should return an object containing the subscription's name and cost property. 
  If no subscription is found, the function should return an object with the name and cost properties set to null.
- getSubscriptionObject('HBOMax'); // => { name: 'HBOMax', costPerMonth: 14.99 }
- getSubscriptionObject('Disney Plus'); // => { name: null, costPerMonth: null }

*/


  let getSubscriptionObject = function(array, name){
    // base case, no name match found
   if (array.length === 0) {
    return { name: null, costPerMonth: null };
   }
   // task, search for a match
   if (array[0].name === name) {
    // return if found
    return { name: array[0].name, costPerMonth: array[0].costPerMonth }
   }
   // recursion
   return getSubscriptionObject(array.slice(1), name);
  };
  
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #4 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  
  /**
   * 4. Create a function called `updateSubscription` that takes in two parameters - 
   * `object` and `updates`. `object` represents a single subscription object; `updates` represents an array of arrays, 
   * where each subarray contains a property to update and a value to assign to that property. 
   * This function should use this `updates` array to access the necessary properties on the input object and assign the new values. 
   * `updateSubscription` should return the input object after modifying it.
```
updateSubscription(
{
  name: "HBOMax",
  type: 'streaming',
  costPerMonth: 14.99,
  cancel: false
}, [ ['name', 'Max'], ['costPerMonth', 12.99] ] 
);

// returns =>

{
  name: 'Max',
  type: 'streaming',
  costPerMonth: 12.99,
  cancel: false
}
   */

/**
 *    FUNCTION RECEIVES A SINGLE SUBSCRIPTION OBJECT AND AN ARRAY OF ARRAYS
 *    EACH SUBARRAY CONTAINS A PROPERTY TO UPDATE AND A VALUE TO ASSIGN TO THAT PROPERTY [[property, value], [property, value]]
 *    THIS FUNCTION SHOULD USE 'UPDATES' ARRAY TO ACCESS PROPERTIES ON INPUT OBJECT TO ASSIGN NEW VALUES
 */
  
  
  let updateSubscription = function(object, updates){
    // iterate through object
    for (let key in object) {
      // iterate through updates array
      for (let i = 0; i < updates.length; i++) {
        // search for a property name match
        if (updates[i][0] === key) {
          // reassign the value of key
          object[key] = updates[i][1];
        }
      }
    }
    // return object
    return object;
  }
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #5 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  
  /**
   * 5. Create a function called `getMultipleUsers` that takes in one parameter - `array` - which represents an array of subscription objects. 
   * This function should use the native filter method to return a new array of only the subscriptions that have multiple users.
   */
  let getMultipleUsers = function(array){
    return array.filter(function(array) {
      // filter if users array is greater than 1
      return array.users.length > 1;
    })
   
  }; 
  
  
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #6 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  
  /**
   * 6. Create a function called `getUsersArray` that takes in one parameter - 
   * `array` which represents an array of subscription objects. 
   * This function should use the native map method to return a new array of objects that only contains the `name` property 
   * of the subscription and `users` property pointing to an array of the users.
```
getUsersArray(subscriptions); // returns => 
[
  { name: 'HBOMax', users: [ [Object], [Object] ] },
  { name: 'Hulu', users: [ [Object] ] },
  { name: 'Netflix', users: [ [Object], [Object], [Object] ] },
  { name: 'Express VPN', users: [ [Object] ] },
  { name: 'Adobe Premiere Pro', users: [ [Object] ] }
]
```
   */
  let getUsersArray = function(array){
    // .map 
   return array.map(function(array) {
    // return objects that look like this v
    return {
      name: array.name,
      users: array.users
    };
   });
  };
  
  
