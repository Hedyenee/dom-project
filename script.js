// function with addEventListener
const el = document.getElementsByClassName('far fa-heart')
console.log(el);
for (let i = 0; i < el.length; i++) {
    const icon = el[i]
    icon.addEventListener('click', changeClass)
}

function changeClass(event) {
    const el = event.target
    if (el.classList.contains('far') == true) {
        el.classList.add('fas')
        el.classList.remove('far')
    } else {
        el.classList.add('far')
        el.classList.remove('fas')
    }
}

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', resetClicked)
}

function resetClicked() {
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var bookItem = button.parentElement.parentElement.parentElement.parentElement
    var title = bookItem.getElementsByClassName('book-title')[0].innerText
    var price = bookItem.getElementsByClassName('book-price')[0].innerText
    var image = bookItem.getElementsByClassName('card-img')[0].src
    addItemToCart(title, price, image)
    updateCartTotal()
}

function addItemToCart(title, price, image) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${image}" width="45" height="60">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column priceprice">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}


function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('DT', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total)
    document.getElementsByClassName('cart-total-price')[0].innerText = total + ' DT'
}























function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
}

// heart button
var btnvar = document.getElementsByClassName('fa-regular fa-heart');

function Toggle() {
    if (btnvar.style.color == "red") {
        btnvar.style.color = "grey"
    }
    else {
        btnvar.style.color = "red"
    }
}


