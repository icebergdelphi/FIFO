const assert = require('assert');
const allocate = require('./allocate');
const salesOrders = require('./entities/salesOrder');
const purchaseOrders = require('./entities/purchaseOrder');

describe('Allocation Tests', function () {
  it('should allocate products based on sales and purchase orders', function () {
    const result = allocate(salesOrders, purchaseOrders);
    assert.strictEqual(result.length, salesOrders.length);
    assert.strictEqual(result[0].id, salesOrders[0].id);
    assert.deepStrictEqual(result[0].expectedDelivery, new Date(purchaseOrders[0].receiving));

  });
});