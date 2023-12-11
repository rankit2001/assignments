/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let mp =new Map();
  transactions.forEach(element => 
    {
    let cat = element.category;
    let price = element.price;
    if(mp.has(cat)){
      let prev = mp.get(cat);
      mp.set(cat,prev+price);
      // mp[cat] += price;
    }
    else{
      mp.set(cat,price);
    }
    console.log(mp);
  });
 
  const ans = [...mp].map(([name,value])=>({category:name,totalSpent:value}));
  return ans;
}

module.exports = calculateTotalSpentByCategory;
