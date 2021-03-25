$(document).ready(() => {
  getProduct();

});

function getProduct(){
  let xhr1 = new XMLHttpRequest();
  xhr1.open("GET", `https://fakestoreapi.com/products?page=1&limit=12`, true);
  xhr1.onload = function () {
    if (this.status == 200) {
      let list = JSON.parse(this.responseText);
      innerProduct(list);
      innerSilder(list);
    }
  }
  xhr1.send();
}

function innerProduct(list) {
  let output = ``;
  let productBanner = document.querySelector(".product-banner");
    list.forEach((item) => {
    output +=
    `<div class="col-lg-3 col-6 card-product-wrapper mb-0 mt-3 mx-0 rounded">
      <div class="card product shadow-sm rounded">
        <a href="#" class="img-card cancelReload"><img class="card-img-top" src="${item.image}" alt="Card image cap"></a>
      <div class="card-body h-75">
        <h5 class="card-title rounded">${item.title}</h5>
        <p href="#" class="text-danger mb-0 price">$ ${item.price.toLocaleString()}</p>
      </div>
    </div>
  </div>`;
  });
  productBanner.innerHTML = output;
  $(".cancelReload").click( function(e) {
    e.preventDefault();
  });
}

function innerSilder(list) {
  let slider = document.querySelector(".my-slider")
  for (let index = 0; index < list.length; index++) {
    let newData = `
      <div class="product">
        <div class="card product shadow-sm rounded w-100 h-100">
        <img class="card-img-top" src="${list[index].image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title rounded">${list[index].title}</h5>
          <div class="bottom-price-star">
          <p href="#" class="text-danger mb-0 price">$ ${list[index].price.toLocaleString()}</p>
          </div>
        </div>
        </div>`
    $('.my-slider').append(newData);
  }
  loadSlider();
}

function loadSlider() {
  let slider = tns({
    container: '.my-slider',
    items: 1,
    gutter: 20,
    slideBy: 2,
    autoplay: true,
    controlsContainer: '#controls',
    edgePadding: 20,
    prevButton: '.previous',
    nextButton: '.next',
    autoplayButton: '.auto',
    autoplayHoverPause: true,
    nav: false,
    responsive: {
      640: {
        items: 2
      },
      1200: {
        items: 3
      },
      1400: {
        items: 4
      }
    },
  });
}
