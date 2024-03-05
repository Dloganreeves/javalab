let cart =[];

function addfood (_name, _price) {

    let newfood = {
    Name: _name,
    Price: _price,
};
cart.push(newfood);
console.log(cart);
}

function checkout (cart) 
{
let total = 0;
 cart.forEach(i => {
    total +=  i.Price;

 });
 console.log(cart);
 console.log(total);
}