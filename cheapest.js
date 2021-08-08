let phones =[
    {name: 'Samsung s8', price: 45000, camera: '20px', storage: "34gb"},
    {name: 'Mi 5', price: 20000, camera: '40px', storage: "64gb"},
    {name: 'Oppo 5', price: 65000, camera: '220px', storage: "324gb"},
    {name: 'Walton', price: 15000, camera: '22px', storage: "24gb"}
]

let cheapest = phones[0];
for ( const phone of phones){
    if (phone.price < cheapest.price){
        cheapest = phone;
    }
}

console.log('cheapest phone', cheapest)


// function 
let laptops = [
    {name: 'Asuss', price: 34000},
    {name: 'hp', price:23000},
    {name: 'dell', price: 40000},
    {name: 'walton', price:20000}
]

function cheapestLaptop(laptops){
    let cheapest = laptops[0];
    for (const laptop of laptops){
        if(laptop.price < cheapest.price){
            cheapest = laptop;
        }
    }
}

let cheap = cheapestLaptop(laptops);
console.log(cheap)