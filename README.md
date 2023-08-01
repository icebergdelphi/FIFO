# FIFO
1.- To RUN:
 node index

 Result:
 Allocate results:
[
  { id: 'S3', availabilityDate: '2020-01-04' },
  { id: 'S5', availabilityDate: '2020-02-01' },
  { id: 'S1', availabilityDate: '2020-02-20' },
  { id: 'S4', availabilityDate: '2020-03-05' },
  {
    id: 'S2',
    availabilityDate: 'Insufficient stock to fulfill the sale, need more purchases'
  }
]

2.-To Test, Please Install:
npm install jest --save-dev

Then: npx jest index.test
√ salesOrders should have 5 elements (3 ms)
√ purchaseOrders should have 5 elements (1 ms)
√ allocate function should return an array (1 ms)
√ allocate function should allocate orders correctly (1 ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
