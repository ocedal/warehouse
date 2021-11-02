const ordersArr = [
  {
    orderNo: '1',
    client: 'a1',
    itemsSKU: [
      { SKU: '1', quantity: '1' },
      { SKU: '2', quantity: '1' },
      { SKU: '5', quantity: '1' },
      { SKU: '3', quantity: '1' },
      { SKU: '6', quantity: '2' },
    ],
    status: 'new',
  },
  {
    orderNo: '2',
    client: 'b2',
    itemsSKU: [
      { SKU: '3', quantity: '1' },
      { SKU: '4', quantity: '2' },
    ],
    status: 'new',
  },
  {
    orderNo: '3',
    client: 'c3',
    itemsSKU: [
      { SKU: '1', quantity: '1' },
      { SKU: '3', quantity: '1' },
      { SKU: '5', quantity: '1' },
      { SKU: '4', quantity: '1' },
    ],
    status: 'new',
  },
  {
    orderNo: '4',
    client: 'c3',
    itemsSKU: [
      { SKU: '1', quantity: '1' },
      { SKU: '3', quantity: '1' },
      { SKU: '5', quantity: '1' },
      { SKU: '4', quantity: '1' },
    ],
    status: 'new',
  },
  {
    orderNo: '5',
    client: 'a1',
    itemsSKU: [
      { SKU: '1', quantity: '1' },
      { SKU: '2', quantity: '1' },
      { SKU: '5', quantity: '1' },
      { SKU: '3', quantity: '1' },
      { SKU: '6', quantity: '2' },
    ],
    status: 'new',
  },
]
module.exports = ordersArr
