function Card(img, img_size, title, price, cut_price, discount) {

    let html = ` <div class="card">
                <div class="img">
                    <img width = "${img_size}" src="${img}" alt="">
                </div>
                <div class="title">
                    <h2>
                       ${title}
                    </h2>
                    <div class="price">
                        <p>₹${cut_price}</p>
                        <h1>₹${price}</h1>
                        <button>${discount}</button>
                    </div>
                </div>
            </div>`
    document.body.querySelector(".main-content").innerHTML = document.body.querySelector(".main-content").innerHTML + html
}

Card("images/IMG-20240907-WA0012.jpg", "250", "New Smart Watch", "1899", "5999", "69% OFF")
Card("images/IMG-20240907-WA0001.jpg", "200", "New Men's Fashion", "349", "699", "65% OFF")
Card("images/IMG-20240907-WA0026.jpg", "260", "New Shoes", "1899", "5999", "69% OFF")
Card("images/IMG-20240907-WA0012.jpg", "250", "New Smart Watch", "1899", "5999", "69% OFF")
Card("images/IMG-20240907-WA0026.jpg", "260", "New Shoes", "1899", "5999", "69% OFF")
Card("images/IMG-20240907-WA0026.jpg", "260", "New Shoes", "1899", "5999", "69% OFF")

Card("images/IMG-20240907-WA0012.jpg", "250", "New Smart Watch", "1899", "5999", "69% OFF")
Card("images/IMG-20240907-WA0012.jpg", "250", "New Smart Watch", "1899", "5999", "69% OFF")
Card("images/IMG-20240907-WA0012.jpg", "250", "New Smart Watch", "1899", "5999", "69% OFF")
Card("images/IMG-20240907-WA0012.jpg", "250", "New Smart Watch", "1899", "5999", "69% OFF")
Card("images/IMG-20240907-WA0012.jpg", "250", "New Smart Watch", "1899", "5999", "69% OFF")
Card("images/IMG-20240907-WA0012.jpg", "250", "New Smart Watch", "1899", "5999", "69% OFF")
Card("images/IMG-20240907-WA0012.jpg", "250", "New Smart Watch", "1899", "5999", "69% OFF")
Card("images/IMG-20240907-WA0012.jpg", "250", "New Smart Watch", "1899", "5999", "69% OFF")
Card("images/IMG-20240907-WA0012.jpg", "250", "New Smart Watch", "1899", "5999", "69% OFF")
Card("images/IMG-20240907-WA0012.jpg", "250", "New Smart Watch", "1899", "5999", "69% OFF")
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