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

