const products = [
    {name: 'laptop', price: 23000},
    {name: 'watch', price: 1500},
    {name: 'phone', price: 1500},
    {name: 'shirt', price: 23000},
    {name: 'blender', price: 13000},
]

let totalPrice = 0;
for (let product of products){
    totalPrice += product.price;
}
// console.log('total Price = ', totalPrice);

const shopingCart = [
    {name: 'laptop', price: 23000.00, quantity: 1},
    {name: 'watch', price: 1500, quantity: 3},
    {name: 'phone', price: 1500, quantity: 4},
    {name: 'shirt', price: 23000, quantity: 5},
    {name: 'blender', price: 13000, quantity: 2},
]

let totalAmount = 0;
for (const item of shopingCart){
    productCost = item.price * item.quantity;
    totalAmount += productCost;
}

console.log('Total Amount = ', totalAmount, 'Tk')

const parcentage = 10;

let discount = (parcentage/100) * totalAmount;
console.log('discount = ', discount, 'Tk')
let amountToPay = totalAmount - discount;
console.log('Amount To Pay = ', amountToPay, 'Tk')