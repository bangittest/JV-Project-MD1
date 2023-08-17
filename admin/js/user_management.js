
const data = JSON.parse(localStorage.getItem("users")) || []
// let idGlobal = 1
let indexUpdateGlobal = null
const inputusername = document.getElementById("username")
const inputemail = document.getElementById("email")
const inputfullname = document.getElementById("full_name")
const inputpassword = document.getElementById("password")
const inputrole = document.getElementById("role")
function Table() {
    const data = JSON.parse(localStorage.getItem("users")) || []
    let stringHTML = "";
    data.forEach(e =>
        stringHTML +=
        `
                    <tr>
                        <td>${e.user_id}</td>
                        <td>${e.username}</td>
                        <td>${e.email}</td>
                        <td>${e.full_name}</td>
                        <td>${e.password}</td>
                        <td>${e.role}</td>
                        <td>
                            <div class="action_col">
                                <button class="btn btn_sua" onclick="toggleForm(${e.user_id})">See</button>
                                <button class="btn btn_xoa" onclick="deleteProduct(${e.user_id})">Delete</button>
                            </div>
                        </td>
                    </tr>
            `
    )
    document.getElementById("table_body").innerHTML = stringHTML
}
Table()


function toggleForm(id) {
    const data = JSON.parse(localStorage.getItem("users")) || []
    document.getElementById("form_scope").classList.toggle("hide")
    if (id != undefined) {
        const indexUpdate = data.findIndex(e => e.user_id == id)
        indexUpdateGlobal = indexUpdate
        inputusername.value = data[indexUpdate].username
        inputemail.value = data[indexUpdate].email
        inputfullname.value = data[indexUpdate].full_name
        inputpassword.value = data[indexUpdate].password
        inputrole.value = data[indexUpdate].role
    } else {
        indexUpdateGlobal = null
        document.getElementById("form").reset()
    }
}

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault()
    const data = JSON.parse(localStorage.getItem("users")) || []
    if (indexUpdateGlobal != null) {
        data[indexUpdateGlobal].username = inputusername.value
        data[indexUpdateGlobal].email = inputemail.value
        data[indexUpdateGlobal].full_name = inputfullname.value
        data[indexUpdateGlobal].password = inputpassword.value
        data[indexUpdateGlobal].role = inputrole.value
        indexUpdateGlobal = null
        this.reset()
        toggleForm()
        localStorage.setItem("users", JSON.stringify(data))
        Table()
        location.reload();
        return
    }
    const users = {
        user_id: getNewId(),
        username: inputusername.value,
        email: inputemail.value,
        full_name: inputfullname.value,
        password: inputpassword.value,
        role: inputrole.value,
    }
    // idGlobal++
    data.push(users)
    localStorage.setItem("users", JSON.stringify(data))
    this.reset()
    toggleForm()
    Table()
    location.reload();
})

function deleteProduct(id) {
    const data = JSON.parse(localStorage.getItem("users")) || []
    const indexDelete = data.findIndex(e => e.user_id == id)
    const result = confirm(`Delete ${data[indexDelete].name}`)
    if (result) {
        data.splice(indexDelete, 1)
    }
    localStorage.setItem("users", JSON.stringify(data))
    Table()
}

function checkSearch() {
    let text = document.getElementById("search").value;
    let foundStudent = data.filter(stu => stu.name.toLowerCase().includes(text.trim().toLowerCase()));
    Table(foundStudent);
}
// logic id tự tăng
function getNewId() {
    let idMax = 0;
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (idMax < element.user_id) {
            idMax = element.user_id
        }
    }
    return idMax + 1;
}



// function confirmLogout() {
//     let result = confirm("bạn có chắc chắn muốn đăng xuất không");
//     if (result) {
//         // Thực hiện thao tác đăng xuất tại đây
//         alert("Đăng xuất thành công!");
//         window.location.href = "../admin/adminlogin.html"
//     }
//     // window.location.href = "../admin/adminlogin.html"
// }

// function toggleLogoutMenu(avatar) {
//     avatar.classList.toggle("active");
// }
