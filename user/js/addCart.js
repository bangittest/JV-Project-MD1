// thêm sản phẩm vào giỏ hàng
const addToCart = (idProduct) => {
    let userLogin = JSON.parse(sessionStorage.getItem("userlogin"));
    if (userLogin == null) {
        alert("Vui lòng đăng nhập đề xem giở hàng");
        location.href = "/user/login.html";
    }
    // lấy ra số lượng mua
    let quantity = +document.getElementById("quantity_ty").value;

    // nếu sp đã tồn tại trong giỏ hàng thì tăng số lượng
    let indexCartItem = userLogin.cart.findIndex(
        (cartIt) => cartIt.idPro == idProduct
    );
    if (indexCartItem > -1) {
        // đã tồn tại
        userLogin.cart[indexCartItem].quantity = +userLogin.cart[indexCartItem].quantity + quantity;
    } else {
        // chưa tồn tại , thêm mới
        let cartItem = {
            idPro: idProduct,
            quantity: quantity,
        };
        userLogin.cart.push(cartItem);
    }
    sessionStorage.setItem("userlogin", JSON.stringify(userLogin));
    location.href = "/user/cart.html";
};

const showCart = () => {
    let userLogin = JSON.parse(sessionStorage.getItem("userlogin"));
    let products = JSON.parse(localStorage.getItem("product"))
    let total = 0;
    // recduce hàm tính tổng
    let listCartItem = userLogin.cart.reduce((string, ct) => {
        // find hàm có sẵn hàm này tìm được phần tử đầu tiên khi tìm được
        //  giá trị đầu tiên thì trả về giá trị của nó ko thì trả về underfile
        // lấy thông tin sp theo id
        let product = products.find((p) => p.id == ct.idPro);
        //công tiền 
        total += +product.sum * ct.quantity;
        return (
            string +
            `<tr>
                    <td>${product.id}</td>
                    <td><img src="/user/img/products/${product.img}" alt="#" class="product-image"></td>
                    <td>${product.name}</td>
                    <td>${product.sum}đ</td>
                    <td><input type="number" class="quantity-input" id="quantity_${ct.idPro}" value="${ct.quantity}" min="1" ></td>
                    <td>${+product.sum * ct.quantity}đ</td>
                    <td class="action-btns">
                        <button class="update-btn" onclick="handleUpdate(${ct.idPro})" >Update</button>
                        <button class="remove-btn" onclick="handleDelete(${ct.idPro})" >Remove</button>
                    </td>
                </tr>`
        )
    }, "");
    document.querySelector("tbody").innerHTML = listCartItem;
    document.getElementById("total_All").innerHTML = `${total}đ`;
};
showCart()

// XỬ lí xóa
const handleDelete = (idPro) => {
    let userLogin = JSON.parse(sessionStorage.getItem("userlogin"));
    if (confirm("Are you sure you want to delete")) {
        let indexDelete = userLogin.cart.findIndex(ct => ct.idPro == idPro)
        userLogin.cart.splice(indexDelete, 1);
        sessionStorage.setItem("userlogin", JSON.stringify(userLogin))
        showCart();
    }
}
// hàm sử lí cập nhật
const handleUpdate = (idPro) => {
    let userLogin = JSON.parse(sessionStorage.getItem("userlogin"));
    // lấy ra số lượng cần cập nhật
    let quantity = +document.querySelector(`#quantity_${idPro}`).value
    if (quantity < 1) {
        alert("Số lượng tối thiểu là 1")
        showCart()
        return
    }
    // Láy ra vị trí cần cập nhật
    let indexCartItem = userLogin.cart.findIndex(
        (cartIt) => cartIt.idPro == idPro
    );
    userLogin.cart[indexCartItem].quantity = quantity;
    sessionStorage.setItem("userlogin", JSON.stringify(userLogin))
    showCart();
}