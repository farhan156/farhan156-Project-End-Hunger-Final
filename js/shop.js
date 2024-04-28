// Initialize the shopping cart array
var cart = [];

// Function to add item to cart
function addToCart(itemName, price,image) {
    var item = {
        name: itemName,
        price: price,
        image: image
    };
    cart.push(item);
    alert(itemName + " added to cart!");
    updateCart();
}

// Function to update the cart display
function updateCart() {
    var cartList = document.getElementById('cart');
    cartList.innerHTML = '';
    cart.forEach(function(item,index) {
        var listItem = document.createElement('li');
        var itemImage = document.createElement('img')
        itemImage.src = item.image;
        itemImage.alt = item.name;
        listItem.appendChild(itemImage);
        listItem.innerHTML += '<span>' + item.name + ': ' + item.price +'LKR' +'</span>';
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            removeFromCart(index);
        };
        listItem.appendChild(deleteButton);
        cartList.appendChild(listItem);
    });

    updateTotal();

}

// Function to calculate and update the total
function updateTotal() {
    var totalDisplay = document.getElementById('total');
    var total = calculateTotal();
    totalDisplay.textContent = total.toFixed(2); // Display total with two decimal places
}

// Function to calculate the total price
function calculateTotal() {
    var total = 0;
    cart.forEach(function(item) {
        total += item.price;
    });

    return total;
}

// Function to remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
    updateTotal();
}

function proceedToCheckout() {
    if (cart.length === 0) {
        alert("Please select at least one product.");
    } else {
        const total = calculateTotal(); // Calculate total here
        window.location.href = "checkout.html?total=" + total; // Pass total as query parameter
    }
}

        
