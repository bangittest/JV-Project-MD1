
// lấy ra tài khoản đăng nhập hiện tại
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
          <li><a class="dropdown-item" href="#">trang ca nhan</a></li>
          <li><a class="dropdown-item" href="#">doi mat khau</a></li>
          <li><a class="dropdown-item" onclick="handlelLogout()" href="#">dang xuat</a></li>
        </ul>
      </div>`
    }

} else { // chưa có tài khoản đăng nhập
    for (let i = 0; i < divs.length; i++) {
        const element = divs[i];
        element.innerHTML = `<a href="./user/login.html"><i class="fa fa-user"></i> Login</a>`
    }
}


const handlelLogout = () => {
    // thực hiện đăng xuất tài khoản
    sessionStorage.removeItem("userlogin");
    // load lại trang
    location.reload();
}
// handlelLogout()
// localStorage.setItem("products", JSON.stringify([]))
// let arr = [
//     { name: "Bàn Học Bàn GameMing", price: 129998, selled: 297, img: "home3.jpg" }
// ]

// let str = ""
// for (let i = 0; i < 10; i++) {
//     const e = products[i];
//     console.log(e.img);
//     str += `
//chọn mặc định giá trị in ra



// danh sách phân trang
let products = JSON.parse(localStorage.getItem("product"))
let arrC = []
let arrB = []
let arrA = []
products.forEach(e => {
    if (e.phanloai == "Loại C") {
        arrC.push(e)
    }
    else if (e.phanloai == "Loại B") {
        arrB.push(e)
    } else {
        arrA.push(e)
    }
})
// console.log(arr);
// products.push(...arr)
// localStorage.setItem("product", JSON.stringify(products))
function print(arr = products) {
    let str = ""
    // forEach duyệt 1 mảng cụ thể
    arr.forEach(e =>
        str += `<div class="row products mini">
                <div class="item">
                    <div class="media">
                        <div class="thumbnail object-cover">
                            <a>
                                <img src="user/img/products/${e.img}" alt="">
                            </a>
                        </div>
                        <div class="hoverable">
                            <ul>
                                <li class="active"><a href="#"><i class="ri-heart-line"></i></a>
                                </li>
                                <li><a href=""><i class="ri-eye-line"></i></a></li>
                                <li><a href=""><i class="ri-shuffle-line"></i></a></li>
                            </ul>
                        </div>
                        <div class="discount circle flexcenter"><span>50%</span></div>
                    </div>
                    <div class="content">
                        <h3 class="main-links" onclick="hanDoclick(${e.id})"><a href = "#">${e.name}</a>
                        </h3>
                        <div class="price">
                            <span class="current">${e.sum}đ</span>
                            <span class="normal mini-text">189.988</span>
                        </div>
                        <div class="mini-text">
                            
                            <p>Miễn phí vận chuyển</p>
                        </div>

                    </div>
                </div>
            </div>`
    );
    document.getElementById("product1111").innerHTML = ""
    document.getElementById("product1111").innerHTML = str
}
print()

function hanDoclick(id) {
    sessionStorage.setItem("producdetail", JSON.stringify(id))
    window.location.href = "user/description.html"
}




const swiper = new Swiper('.swiper', {

    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
});
