const assert = require('assert');
const allocate = require('./allocate');
const salesOrders = require('./entities/salesOrder');
const purchaseOrders = require('./entities/purchaseOrder');

//Testing

test('salesOrders should have 5 elements', () => {
  expect(salesOrders.length).toBe(5);
});

test('purchaseOrders should have 5 elements', () => {
  expect(purchaseOrders.length).toBe(5);
});

test('allocate function should return an array', () => {
  const result = allocate(salesOrders, purchaseOrders);
  expect(Array.isArray(result)).toBe(true);
});

test('allocate function should allocate orders correctly', () => {
  const result = allocate(salesOrders, purchaseOrders);
  expect(result).toBe(result);
  
});