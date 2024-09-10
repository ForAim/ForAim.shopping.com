function Card(img, img_size, title, price, cut_price, discount) {

    let html = ` <div class="product-card">
        <div class="product-image">
            <img src="${img}" alt="Product Image">
        </div>
        <div class="product-info">
            <h2 class="product-title">${title}</h2>
            <p class="product-price">
                <span class="cut-price">$${cut_price}</span> 
                <span class="new-price">$${price}</span>
            </p>
            <p class="product-discount">${discount}</p>
        </div>
    </div>`
    document.body.querySelector(".main-content").innerHTML = document.body.querySelector(".main-content").innerHTML + html
}

Card("images/IMG-20240907-WA0012.jpg", "250", "New Smart Watch", "1899", "5999", "69% OFF")
Card("images/IMG-20240907-WA0012.jpg", "250", "New Smart Watch", "1899", "5999", "69% OFF")
Card("images/IMG-20240907-WA0012.jpg", "250", "New Smart Watch", "1899", "5999", "69% OFF")
Card("images/IMG-20240907-WA0012.jpg", "250", "New Smart Watch", "1899", "5999", "69% OFF")
Card("images/IMG-20240907-WA0012.jpg", "250", "New Smart Watch", "1899", "5999", "69% OFF")
Card("images/IMG-20240907-WA0012.jpg", "250", "New Smart Watch", "1899", "5999", "69% OFF")
Card("images/IMG-20240907-WA0012.jpg", "250", "New Smart Watch", "1899", "5999", "69% OFF")



function banner(img, size) {
    let banner = `<div class="web-banner">
        <img width = "${size}" src="${img}" alt="">
    </div>`
    document.body.querySelector("nav").innerHTML = document.body.querySelector("nav").innerHTML + banner
}

banner("images/logo-png.png", "800")
