
window.alert(Math.random() * 100); //This will return a random number between 0 and 100
//document.write(Math.random() * 100 + "<br>"); //This will return a random number between 0 and 100    

 // Accessing dictionary values
  //console.log(myDictionary.name); // Output: John
 // console.log(myDictionary["age"]); // Output: 30

  // Adding a new key-value pair
  myDictionary.country = "USA";
  console.log(myDictionary); // Output: { name: 'John', age: 30, city: 'New York', country: 'USA' }

  // Removing a key-value pair
  delete myDictionary.city;
  console.log(myDictionary); // Output: { name: 'John', age: 30, country: 'USA' }
