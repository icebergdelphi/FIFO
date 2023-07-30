const readline = require('readline');
const salesOrders = require('./entities/salesOrder');
const purchaseOrders = require('./entities/purchaseOrder');
const allocate = require('./allocate');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("*************************************************************************************************");
console.log("**************************************FIFO The Inventory Manager*************************************");
console.log("*************************************************************************************************");
console.log();
console.log("**********************Choise an Option***************************");
console.log("1.Type 'start' To Run The Inventory");
console.log("2.-Type 'exit' to Close the APP");
console.log();

rl.on('line', (input) => {
  if (input === 'start') {  
    const result = allocate(salesOrders, purchaseOrders);
    console.log("Allocate results:");
    console.log(result);
  } else if (input === 'exit') {
    rl.close();
  } else {
    console.log("Invalid Command. Input 'start' To RUN the APP or 'exit' to Close All.");
  }
});