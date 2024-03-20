document.getElementById("main-action-button").onclick = () => {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
};

let links = document.querySelectorAll(".menu-item a");

for (let i = 0; i < links.length; i++) {
  links[i].onclick = () => {
    document
      .getElementById(links[i].getAttribute("data-link"))
      .scrollIntoView({ behavior: "smooth" });
  };
}

let buttons = document.getElementsByClassName("product-button");

// console.log(links);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = () => {
    document.getElementById("order").scrollIntoView({ behavior: "smooth" });
  };
}

let burger = document.getElementById("burger");
let name = document.getElementById("name");
let phone = document.getElementById("phone");

document.getElementById("order-action").onclick = () => {
  let hasError = false;
  [burger, name, phone].forEach((el) => {
    if (!el.value) {
      el.parentElement.style.background = "red";
      hasError = true;
    } else {
      el.parentElement.style.background = "";
    }
  });

  if (!hasError) {
    [burger, name, phone].forEach((el) => {
      el.value = "";
    });
    alert("Спасибо за заказ! Мы скоро свяжемся с вами!");
  }
};

let prices = document.getElementsByClassName("products-item-price");

document.getElementById("change-currency").onclick = (e) => {
  let currentCurrency = e.target.innerText;
  let newCurrency = "$";
  let coefficient = 1;

  if (currentCurrency === "$") {
    newCurrency = "₽";
    coefficient = 80;
  } else if (currentCurrency === "₽") {
    newCurrency = "BYN";
    coefficient = 3;
  } else if (currentCurrency === "BYN") {
    newCurrency = "€";
    coefficient = 0.9;
  } else if (currentCurrency === "€") {
    newCurrency = "¥";
    coefficient = 6.9;
  }

  e.target.innerText = newCurrency;

  for (let i = 0; i < prices.length; i++) {
    prices[i].innerHTML =
      +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) +
      " " +
      newCurrency;
  }
};
