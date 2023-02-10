
let btnList = document.querySelectorAll(".product__quantity-control")
for (let btn of btnList) {
    btn.addEventListener("click", (e) => {
        let btnAdd = btn.parentElement.querySelector(".product__quantity-value")
        if (e.currentTarget.classList.contains("product__quantity-control_inc")) {
            btnAdd.textContent = Number(btnAdd.textContent) + 1
        } else {
            if (btnAdd.textContent > 1) {
                btnAdd.textContent = Number(btnAdd.textContent) - 1
            }
        }
    })
}


let listProductsAdd = document.querySelectorAll(".product__add")
function createBasket(id, img, count) {
    let product = ` <div class="cart__product" data-id="${id}">
                        <img class="cart__product-image" src="${img}">
                        <div class="cart__product-count">${count}</div>
                    </div>`
    return product
}

function getProductBasket(id) {
    let basketList = Array.from(document.querySelector(".cart__products").children)
    return basketList.find(item => item.dataset.id == id)

}
for (let btnAdd of listProductsAdd) {
    btnAdd.addEventListener("click", () => {
        let product = btnAdd.closest(".product")
        id = product.dataset.id
        count = product.querySelector(".product__quantity-value").textContent
        let basketList = document.querySelector(".cart__products"),
        productInBasket = getProductBasket(id)
        if (productInBasket) {
            let productInBasketCount = productInBasket.querySelector(".cart__product-count")
            productInBasketCount.textContent = Number(productInBasketCount.textContent) + Number(count)
        } else {
            img = product.querySelector(".product__image").getAttribute("src")
            let productBasket = createBasket(id, img, count)
            basketList.insertAdjacentHTML("afterbegin", productBasket)
        }
    })
}