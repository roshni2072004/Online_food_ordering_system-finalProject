const data = [
  {
    id: 0,
    img: "./logo/pizzameal.jpg",
    name: "Taco Quesadila Pizza",
    price: 190,
    save: 25,
    desc: "Lorem ipsum dolor sit amet consectetur  earum sapiente!",
    delievery: "In 15-25 minutes",
    itemInCart: false,
  },
  {
    id: 1,
    img: "./logo/bugermwal.jpg",
    name: "The full works burger",
    price: 90,
    save: 40,
    desc: "Lorem ipsum dolor sit amet consectetur  earum sapiente!",
    delievery: "In 15-25 minutes",
    itemInCart: false,
  },
  {
    id: 2,
    img: "./logo/chole Bhature.jpg",
    name: "Chhole Bhature",
    price: 240,
    save: 30,
    desc: "Lorem ipsum dolor sit amet consectetur  earum sapiente!",
    delievery: "In 15-25 minutes",
    itemInCart: false,
  },
  {
    id: 3,
    img: "./logo/biryani.jfif",
    name: "Biryani",
    price: 285,
    save: 35,
    desc: "Lorem ipsum dolor sit amet consectetur  earum sapiente!",
    delievery: "In 15-25 minutes",
    itemInCart: false,
  },
  {
    id: 4,
    img: "./logo/Chilli-Potato.webp",
    name: "Chilli-Potato",
    price: 200,
    save: 15,
    desc: "Lorem ipsum dolor sit amet consectetur  earum sapiente!",
    delievery: "In 15-25 minutes",
    itemInCart: false,
  },
  {
    id: 5,
    img: "./logo/idli.webp",
    name: "Idli Sambhar",
    price: 220,
    save: 25,
    desc: "Lorem ipsum dolor sit amet consectetur  earum sapiente!",
    delievery: "In 15-25 minutes",
    itemInCart: false,
  },
  {
    id: 6,
    img: "./logo/samosa cholejpg.jpg",
    name: "Chhole Samosa",
    price: 160,
    save: 20,
    desc: "Lorem ipsum dolor sit amet consectetur  earum sapiente!",
    delievery: "In 15-25 minutes",
    itemInCart: false,
  },
  {
    id: 7,
    img: "/images/redmi9.jpg",
    name: "Redmi 9",
    price: 100,
    save: 10,
    desc: "Lorem ipsum dolor sit amet consectetur  earum sapiente!",
    delievery: "In 15-25 minutes",
    itemInCart: false,
  },
];

let cartList = []; //array to store cart lists

var i;
var detail = document.getElementsByClassName("card-item");
var detailsImg = document.getElementById("details-img");
var detailTitle = document.getElementById("detail-title");
var detailPrice = document.getElementById("detail-price");
var youSave = document.getElementById("you-save");
var description = document.getElementById("desc");
var desPara = document.getElementById("descP");
var detailsPage = document.getElementById("details-page");
var back = document.getElementById("buy");
back.addEventListener("click", refreshPage);
var addToCarts = document.querySelectorAll("#add-to-cart");
var cart = document.getElementById("cart");

// click event to display cart page
cart.addEventListener("click", displayCart);

var carts = document.getElementById("carts");

//click events to add items to cart from details page
carts.addEventListener("click", () => addToCart(getId));

var home = document.getElementById("logo");

//events on dynamically created element to remove items from list
document.addEventListener("click", function (e) {
  if (e.target.id == "remove") {
    var itemId = e.target.parentNode.id;
    removeFromCart(itemId);
  }
});

//click event to display details page
for (i = 0; i < data.length; i++) {
  detail[i].addEventListener("click", handleDetail);
}

var getId;

//click events to add items to cart from home page cart icon
addToCarts.forEach((val) =>
  val.addEventListener("click", () => addToCart(val.parentNode.id))
);

// details function
function handleDetail(e) {
  detailsPage.style.display = "block";
  getId = this.parentNode.id;
  detailsImg.src = data[getId].img;
  detailTitle.innerHTML = data[getId].name;
  detailPrice.innerHTML = "Price : Rs " + data[getId].price;
  youSave.innerHTML = "You save : (Rs " + data[getId].save + ")";
  description.innerHTML= "Description : ";
  desPara.innerHTML =  data[getId].desc;
}

// add item to the cart
function addToCart(id) {
  if (!data[id].itemInCart) {
    cartList = [...cartList, data[id]];
    addItem();

    alert("item added to your cart");
  } else {
    alert("your item is already there");
  }
  data[id].itemInCart = true;
}

//back to main page
function refreshPage() {
  detailsPage.style.display = "none";
}



//display your cart page
function displayCart() {
  document.getElementById("cart-container").style.display = "block";
  if (cartList.length == 0) {
    document.getElementById("cart-with-items").style.display = "none";
    document.getElementById("empty-cart").style.display = "block";
    document.getElementById("placeorder").style.display= "none";
  } else {
    document.getElementById("empty-cart").style.display = "none";
    document.getElementById("cart-with-items").style.display = "block";
    document.getElementById("placeorder").style.display= "block";
  }
}

var totalAmount;
var totalItems;
var totalSaving;

//add item to the cart
function addItem() {
  totalAmount = 0;
  totalItems = 0;
  totalSaving = 0;
  var clrNode = document.getElementById("item-body");
  clrNode.innerHTML = "";
  console.log(clrNode.childNodes);
  cartList.map((cart) => {
    var cartCont = document.getElementById("item-body");
    totalAmount = totalAmount + cart.price;
    totalSaving = totalSaving + cart.save;
    totalItems = totalItems + 1;

    var tempCart = document.createElement("div");
    tempCart.setAttribute("class", "cart-list");
    tempCart.setAttribute("id", cart.id);

    var listImg = document.createElement("img");
    listImg.setAttribute("id", "list-img");
    listImg.src = cart.img;
    tempCart.appendChild(listImg);

    var listName = document.createElement("h3");
    listName.setAttribute("class", "list-name");
    listName.innerHTML = cart.name;
    tempCart.appendChild(listName);

    var listPay = document.createElement("h3");
    listPay.setAttribute("class", "pay");
    listPay.innerHTML = cart.price;
    tempCart.appendChild(listPay);

    var listQuantity = document.createElement("h3");
    listQuantity.setAttribute("class", "quantity");
    listQuantity.innerHTML = "1";
    tempCart.appendChild(listQuantity);

    var listTrash = document.createElement("i");
    listTrash.setAttribute("class", "fa fa-trash ");
    listTrash.setAttribute("id", "remove");
    tempCart.appendChild(listTrash);

    cartCont.appendChild(tempCart);
  });
  document.getElementById("total-amount").innerHTML =
    "Total Amount : Rs " + totalAmount;
  document.getElementById("total-items").innerHTML =
    "Total Items : " + totalItems;
  document.getElementById("you-saved").innerHTML =
    "You Saved : Rs " + totalSaving;
  document.getElementById("total").style.display = "block";
}

//remove item from the cart
function removeFromCart(itemId) {
  data[itemId].itemInCart = false;
  cartList = cartList.filter((list) => list.id != itemId);
  addItem();
  if (cartList.length == 0) {
    document.getElementById("cart-with-items").style.display = "none";
    document.getElementById("empty-cart").style.display = "block";
    document.getElementById("placeorder").style.display= "none";
  }
}


// place order
var titlecart =document.getElementById('cart-title');
function oderplace(){
    titlecart.innerHTML="Oder placed!";
    document.getElementById("cart-with-items").innerHTML = "Your meal will be at your door within 20 minutes!";
    document.getElementById("placeorder").style.display= "none";
}
