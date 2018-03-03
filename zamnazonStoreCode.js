var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "Zamn_ProductsDB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
  });

function start() {
      // query the database for all items being auctioned
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;  
    var choicesArray = [];    
        var choicesObj = {
            itemNumber: "",
            product: "",
            price$: "" 
        };
    for (var i = 0; i < results.length; i++) {
        choicesObj = {
            itemNumber: results[i].item_id,
            productName: results[i].product_name,
            $price: results[i].price
            };
        choicesArray.push(choicesObj); 
    } 
    for (var i = 0; i < choicesArray.length; i++) {
    console.log("------------------------------------------");
    console.log("Item ID: " + JSON.stringify(choicesArray[i].itemNumber) + ", " + "Product Name: " + JSON.stringify(choicesArray[i].productName) + ", " + "Price: $" + JSON.stringify(choicesArray[i].$price));  
    console.log("__________________________________________");
    }
});
    buyItem();
}

function buyItem() {
    // query the database for all items being auctioned
connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;

    inquirer.prompt([
        {
        name: "choice",
        type: "input",
        message: "Please enter the Item ID of the product you'd like to purchase from the list above",
        },    
        {
            name: "quantity",
            type: "input",
            message: "How many items would you like to buy?"
        },
      ]).then(function(answer) {
        // get the information of the chosen item
        var chosenItem;
        var itemUpdate;
        for (var i = 0; i < results.length; i++) {
          if (results[i].item_id === parseInt(answer.choice)) {
                chosenItem = results[i];
                itemUpdate = chosenItem.stock_quantity - answer.quantity;
                } 
            }   
            if (chosenItem.stock_quantity > parseInt(answer.quantity))  {
          // bid was high enough, so update db, let the user know, and start over
          connection.query(
              
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: itemUpdate
              },
              {
                item_id: chosenItem.item_id
              }
            ], 
          );
          console.log("------------------------------------------");
          console.log("purchase successful!");
          console.log("Product: " + chosenItem.product_name + ", " +"Total Price: $" + chosenItem.price);
          console.log("-------------------------------------------");
        }
        else {
            if (chosenItem.stock_quantity < parseInt(answer.quantity)) {
            console.log("------------------------------------------");
            console.log("Not enough items in stock!");
            console.log("------------------------------------------");
            }
        }
    });   
  });
}