document.addEventListener("DOMContentLoaded", function () {
    const mainImage = document.getElementById("mainImage");
    const thumbnails = document.querySelectorAll(".thubnai11");
    const productDescription = document.querySelector(".product-details p");

    // const descriptions = [
    //     "Quần dài chất lượng cao, thích hợp cho mọi hoàn cảnh.",
    //     "Sản phẩm được làm từ vải thoải mái, dễ dàng di chuyển.",
    //     "Kiểu dáng thời trang và hiện đại, phù hợp cho nhiều lứa tuổi."
    // ];

    function showImage(index) {
        if (index >= 0 && index < thumbnails.length) {
            mainImage.src = thumbnails[index].getAttribute("src");
            productDescription.textContent = descriptions[index];
        }
    }

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", function () {
            showImage(index);
        });
    });

    // Hiển thị ảnh đầu tiên khi trang tải
    showImage(0);
});

let idPro = JSON.parse(sessionStorage.getItem("producdetail"))
if (idPro) {
    let products = JSON.parse(localStorage.getItem("product"))
    let product = products.find(pro => pro.id == idPro)
    console.log(product);
    document.querySelector(".product-detail").innerHTML = `<div class="product-images">
                        <div class="main-image">
                            <img width="200px" src="" alt="Quần dài" id="mainImage">
                        </div>
                        <div class="thumbnail-images">
                            <img width="200px" src="img/products/${product.img}" class="thubnai11">
                            <img width="200px" src="img/products/${product.img}" class="thubnai11">
                        </div>
                        <div class="product-details">
                            <h3>Mô tả sản phẩm</h3>
                            <p>${product.description}</p>
                        </div>
                    </div>
                    <div class="product-info">
                        <h2>Quần dài</h2>
                        <div class="price">
                            <label for="">Giá sản phẩm:</label> <br>
                            <span class="original-price">${product.sum} VND</span>

                        </div>
                        <div class="quantity">
                            <label for="quantity">Số lượng:</label> <br>
                            <input type="number" id="quantity_ty" min="1">
                        </div>
                        <div class="add-to-cart">
                            <button onclick="addToCart(${product.id})" class="add-to-cart-button">Thêm vào giỏ hàng</button>
                        </div>
                    </div>`
} else {
    location.href = "/"
}
