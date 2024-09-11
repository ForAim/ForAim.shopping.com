function Card(img, title, cut_price, price, discount) {

    let html = ` <div class="product-card">
        <div class="product-image">
            <img src="${img}" alt="Product Image">
        </div>
        <div class="product-info">
            <h2 class="product-title">${title}</h2>
            <p class="product-price">
                <span class="cut-price">₹${cut_price}</span> 
                <span class="new-price">₹${price}</span>
            </p>
            <p class="product-discount">${discount}</p>
        </div>
    </div>`
    document.body.querySelector(".main-content").innerHTML = document.body.querySelector(".main-content").innerHTML + html
}

Card("Products-images/earbuds/IMG-20240911-WA0006.jpg", "New Boult Audio UFO earbuds", "3,499", "1,399", "60% OFF")
Card("Products-images/smart-watch/IMG-20240911-WA0016.jpg", "Noise twist round dial smart watch", "4,999", "1,499", "70% OFF")
Card("Products-images/t-shirts/IMG-20240911-WA0022.jpg", "Veirdo Pure Cotton Oversized T-shirt", "4,999", "1,499", "70% OFF")
Card("Products-images/Fashion/51Mam8F2ufL.jpg", "Men's Casual Button down Shirts", "2,195", "499", "77% OFF")
Card("Products-images/Fashion/61fScC033bL._SY879_.jpg", "Lymio Men Cargo Pants in Cotton ", "4,599", "699", "85% OFF")
Card("Products-images/Fashion/71-GakBLxWL._SY879_.jpg", "Symbol Premium Men's Formal Shirt", "2,599", "1,699", "35% OFF")
Card("Products-images/Fashion/71Yvo3N5ZJL._SY879_.jpg", "Bell-Bottom Men Cargo Jeans", "4,999", "799", "84% OFF")
Card("Products-images/Fashion/81MyI56GPHL._SY879_.jpg", "Lymio Casual Shirt For Men", "3,999", "379", "91% OFF")
Card("Products-images/Fashion/81eMcQKebfL._SX679_.jpg", "Avishkaar Mex Robotic kids toys", "1,499", "998", "33% OFF")
Card("Products-images/Fashion/51wm84K+iLL._SY879_ (1).jpg", "Lymio Men's Cargo Pants In Cotton", "3,999", "699", "83% OFF")
Card("Products-images/t-shirts/71QrtojYXHL._SY879_.jpg", "Grecii looks Men's regular fit shirt", "1,999", "519", "74% OFF")
Card("Products-images/paintings/71HhQxOxQzL._SL1442_.jpg", "Painting for wall Decoration in butterfly design", "3,999", "1,499", "63% OFF")



function banner(img, size) {
    let banner = `<div class="web-banner">
        <img width = "${size}" src="${img}" alt="">
    </div>`
    document.body.querySelector("nav").innerHTML = document.body.querySelector("nav").innerHTML + banner
}

banner("images/attractive-asian-woman-showing-smartphone-app-shopping-bags-buying-online-via-application-standi.jpg", "1400")
