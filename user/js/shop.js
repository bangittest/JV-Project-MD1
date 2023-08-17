


// function print() {
//     let products = JSON.parse(localStorage.getItem("product"))
//     let str = ""
//     products.forEach(e =>
//         str += `
//         <div class="product-item_1">
//     <img src="/user/img/products/${e.img}" alt="">
//         <h3>${e.name}</h3>
//         <p>${e.description}</p>
//         <p>$${e.sum}</p>
//         <button class="add-to-cart_1">Add to Cart</button>
//     </div>
//         `
//     )
//     document.getElementById("product1111").innerHTML = ""
//     document.getElementById("product1111").innerHTML = str
// }

function print() {
    // let products = JSON.parse(localStorage.getItem("product"))
    let str = ""
    for (let i = 0; i < 10; i++) {
        const e = products[i];
        console.log(e.img);
        str += `
        <div class="product-item_1">
        <img src="/user/img/products/${e.img}" alt="">
        <h3>${e.name}</h3>
        <p>${e.description}</p>
        <p>$${e.sum}</p>
        <button class="add-to-cart_1">Add to Cart</button>
    </div>
        `
    }
    document.getElementById("product1111").innerHTML = ""
    document.getElementById("product1111").innerHTML = str
}
print()















let userLogin = JSON.parse(sessionStorage.getItem("userlogin"));
// lấy ra vị trí cần chèn tên và avatar
let divs = document.getElementsByClassName("account");
// console.log(divs); 
// kiẻm tra sự tồn tại
if (userLogin != null) { // nếu có tài khoản đăng nhập
    for (let i = 0; i < divs.length; i++) {
        const element = divs[i];
        element.innerHTML = `<div class="dropdown">
        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
         <img width="30" height="30" style="border-radius:50%; object-fit : cover" src="./user/img/${userLogin.avatar}" alt="">
         <span>${userLogin.username}</span>
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#">MyProfile</a></li>
          <li><a class="dropdown-item" href="#">ChangePass</a></li>
          <li><a class="dropdown-item" onclick="handleLogout()" href="#">Logout</a></li>
        </ul>
      </div>`
    }
} else { // chưa có tài khoản đăng nhập
    for (let i = 0; i < divs.length; i++) {
        const element = divs[i];
        element.innerHTML = `<a href="./user/login.html"><i class="fa fa-user"></i> Login</a>`
    }
}


const handleLogout = () => {
    // thực hiện đăng xuất tài khoản
    sessionStorage.removeItem("userlogin");
    // load lại trang
    location.reload();
}



const swiper = new Swiper('.swiper', {

    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
});


