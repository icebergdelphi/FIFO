module.exports = function allocate(salesOrders, purchaseOrders) {
 //first Sort both arrays based on dates
  salesOrders.sort((a, b) => new Date(a.created) - new Date(b.created));
  purchaseOrders.sort((a, b) => new Date(a.receiving) - new Date(b.receiving));

  let stock = 0;
  let purchaseIndex = 0;
  const result = [];

  for (const sale of salesOrders) {
    while (purchaseIndex < purchaseOrders.length && stock < sale.quantity) {
      const purchase = purchaseOrders[purchaseIndex];
      stock += purchase.quantity;
      purchaseIndex++;
    }

    if (stock >= sale.quantity) {
      // The sale can be fulfilled
      const purchase = purchaseOrders[purchaseIndex - 1];
      result.push({
        id: sale.id,
        availabilityDate: purchase.receiving,
      });
      stock -= sale.quantity;
    } else {
      // Insufficient stock to fulfill the sale
      result.push({
        id: sale.id,
        availabilityDate: "Insufficient stock to fulfill the sale, need more purchases",
      });
    }
  }

  return result;
}