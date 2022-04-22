/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
const tBody = document.querySelector('table#cart>tbody');

table.addEventListener('click', removeItemFromCart);

let cart = [];

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tRows = document.querySelectorAll('table#cart>tbody>tr');
  for (tr in tRows) {
    tBody.removeChild(tr);
  }
}
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
let links = document
for (let i = 0; i < cart.length; i++) {
  cart[i].forEach(item => { let removeLink = document.createElement('a'); 
                            removeLink.href="cart.removeItem"; 
                            removeLink.textContent='Remove Item';
                          })
}
  // TODO: Iterate over the items in the cart
    cart.map.call(function(items) {let tr = document.createElement('tr'); tr.id=`${items.product.filepath.split('/')[1].split('.')[0]}`; tBody.appendChild(tr);});
    let cartTable = cartRows.map()
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
