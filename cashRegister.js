//Given price of the goods, cash and cid (cash-in-drawer, a 2D array listing available currency), return status and change.

```
function checkCashRegister(price, cash, cid) {
// To avoid float number problem, multiple them by 100 first. Also, creating a currency object is because later on we can 
// directly use the key.
  const currency={  
    "ONE HUNDRED":10000,
    "TWENTY": 2000,
    "TEN": 1000, 
    "FIVE": 500, 
    "ONE": 100, 
    "QUARTER": 25, 
    "DIME": 10, 
    "NICKEL":5,
    "PENNY":1,
  };
  var register = {};
  // Transferring an array to an object because we don't know what is the order of currency unit. 
  cid.forEach(([unit,money])=>{register[unit]=money*100});
  
  // Calculating how much money in cid in total. So we can save unnecessary calculation. The amount is increased by 100.
  var allMoney = Object.values(register).reduce((a, b) => (a *100+ b*100)/100);
  var changes = (cash-price)*100;
  
  // If I don't define the object with property, the final result will have change property first.
  var output = {
    status:"",
    change:[]
  };
  if (changes > allMoney){
     output.status= "INSUFFICIENT_FUNDS";
  }
  else if (changes == allMoney){
    output.status = "CLOSED"; 
    output.change = cid;
  }
  else {
    for (let key in currency) {
      if(changes / currency[key] > 1){
      
      // It's important to check if register[key] is not zero, otherwise, it will be pushed to the final result.
        if (changes > register[key]&&register[key]){
          output.change.push([key,register[key]/100]); 
          changes -= register[key]; 
        }
        else if (changes <= register[key]){
          output.change.push([key,(changes - changes % currency[key])/100]); 
          changes %= currency[key];
        }
      }
      if (changes == 0){
        output.status = "OPEN";
        return output;
      }
    }
    output.status = "INSUFFICIENT_FUNDS";
  }
  if (output.status == "INSUFFICIENT_FUNDS")
    output.change=[];
    return output;
}
```
// The biggest challenge for me is how to deal with float numbers.  
