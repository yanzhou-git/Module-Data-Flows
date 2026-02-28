let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

console.log("QTY  ITEM                TOTAL");

function receipt(items) {
  let totalAll = 0;

  items.forEach(({ itemName, quantity, unitPricePence }) => {
    const totalUnit = (quantity * unitPricePence) / 100;
    totalAll += totalUnit;

    console.log(
      `${String(quantity).padEnd(4)}  ${itemName.padEnd(20)}${totalUnit.toFixed(2)}`
    );
  });

  console.log(`\nTotal: ${totalAll.toFixed(2)}`);
}

receipt(order);

print(order);

/* QTY     ITEM                TOTAL
1       Hot Cakes           2.32
2       Apple Pie           2.78
1       Egg McMuffin        2.80
1       Sausage McMuffin    3.00
2       Hot Coffee          2.00
4       Hash Brown          1.60

Total: 14.50
*/
