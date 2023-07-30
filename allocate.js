module.exports = function allocate(salesOrders, purchaseOrders) {
    //first  Sort both arrays based on dates
    salesOrders.sort((a, b) => new Date(a.created) - new Date(b.created));
    purchaseOrders.sort((a, b) => new Date(a.receiving) - new Date(b.receiving));
  
    const result = [];
    let demandPointer = 0;
    let supplyPointer = 0;
  
    while (demandPointer < salesOrders.length && supplyPointer < purchaseOrders.length) {
      const demandOrder = salesOrders[demandPointer];
      const supplyOrder = purchaseOrders[supplyPointer];
  
      if (supplyOrder.quantity >= demandOrder.quantity) {
        // Sufficient supply to fulfill demand
        result.push({
          id: demandOrder.id,
          expectedDelivery: supplyOrder.receiving,
        });
  
        // Reduce the available supply
        supplyOrder.quantity -= demandOrder.quantity;
  
        // Move to the next sales order
        demandPointer++;
      } else {
        // Insufficient supply, allocate what is available
        result.push({
          id: demandOrder.id,
          expectedDelivery: supplyOrder.receiving,
        });
  
        // Update the remaining demand
        demandOrder.quantity -= supplyOrder.quantity;
  
        // Move to the next supply order
        supplyPointer++;
      }
    }
  
    return result;
  }
