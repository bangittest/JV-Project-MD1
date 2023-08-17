// //copu menu for mobile
// function copyMenu() {
//     //copy inside .dpt-cat to .dapartments
//     let dptCategory = document.querySelector('.dpt-cat');
//     let dptPlace = document.querySelector('.departments');
//     dptPlace.innerHTML = dptCategory.innerHTML

//     //copy inside nav to nav
//     let mainNav = document.querySelector('.header-nav')
//     let navPlace = document.querySelector('.off-canvas nav')
//     navPlace.innerHTML = mainNav.innerHTML

//     //copy header-top .wrapper to.thetop-nav
//     let topNav = document.querySelector('.header-top .wrapper');
//     let topPlace = document.querySelector('.off-canvas .thetop-nav')
//     topPlace.innerHTML = topNav.innerHTML

// }
// copyMenu();


// const menuButton = document.querySelector('.trigger')
// closeButton = document.querySelector('.t-close')
// addClass = document.querySelector('.site');

// menuButton.addEventListener('click', function () {
//     addClass.classList.toggle('showmenu')
// })

// closeButton.addEventListener('click', function () {
//     addClass.classList.remove('showmenu')
// })



// const submenu = document.querySelectorAll('has-chil .icon-small');
// submenu.forEach((menu) => menu.addEventListener('click', toggle));

// function toggle(e) {
//     e.preventDefault();
//     submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
//     if (this.closest('.has-child').classList != 'expand');
//     this.closest('.has-child').classList.toggle('expand')
// }



const swiper = new Swiper('.swiper', {

    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
});
// function changeNextImage() {
// }
// changeNextImage()
// let id = setInterval(changeNextImage(), 3000);
// clearInterval(id);
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
          <li><a class="dropdown-item" onclick="handleLogout()" href="#">dang xuat</a></li>
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
let products = JSON.parse(localStorage.getItem("product"))
// products.push(...arr)
// localStorage.setItem("product", JSON.stringify(products))
function print() {
    let str = ""
    products.forEach(e =>
        str += `<div class="row products mini">
                <div class="item">
                    <div class="media">
                        <div class="thumbnail object-cover">
                            <a href="#">
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
                        <h3 class="main-links"><a href="#">${e.name}</a>
                        </h3>
                        <div class="price">
                            <span class="current">${e.sum}đ</span>
                            <span class="normal mini-text">189.988</span>
                        </div>
                        <div class="mini-text">
                            
                            <p>Miễn phí vận chuyển</p>
                        </div>
                            <button class="buttoncart">ADD to CART</button>
                    </div>
                </div>
            </div>`
    );
    document.getElementById("product1111").innerHTML = ""
    document.getElementById("product1111").innerHTML = str
}
print()