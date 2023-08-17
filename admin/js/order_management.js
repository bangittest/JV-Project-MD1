// const data = [
//     { id: 1, name: "Nguyen van A", sum: "119.000", phanloai: "loai A", time: "12/03/2023", date: "12/02/2023" },
//     { id: 2, name: "Nguyen van b", sum: "112.000", phanloai: "loai B", time: "12/03/2023", date: "12/02/2023" },
//     { id: 3, name: "Nguyen van b", sum: "112.000", phanloai: "loai B", time: "12/03/2023", date: "12/02/2023" },
//     { id: 4, name: "Nguyen van b", sum: "112.000", phanloai: "loai B", time: "12/03/2023", date: "12/02/2023" }
// ];
const data = JSON.parse(localStorage.getItem("order")) || []
// let idGlobal = 1
let indexUpdateGlobal = null
const inputName = document.getElementById("name")
const inputtime1 = document.getElementById("time1")
const inputSum = document.getElementById("sum")
const inputphanLoai = document.getElementById("phanloai")
const inputtime = document.getElementById("time")
const inputdatetime = document.getElementById("datetime")


function Table() {
    const data = JSON.parse(localStorage.getItem("order")) || []
    let stringHTML = "";
    data.forEach(e =>
        stringHTML +=
        `
                    <tr>
                        <td>${e.id}</td>
                        <td>${e.name}</td>
                        <td>${e.time1}</td>
                        <td>${e.sum}$</td>
                        <td>${e.phanloai}</td>
                        <td>${e.time}</td>
                        <td>${e.datetime}</td>
                        <td>
                            <div class="action_col">
                                <button class="btn btn_sua" onclick="toggleForm(${e.id})">See</button>
                                <button class="btn btn_xoa" onclick="deleteProduct(${e.id})">Delete</button>
                            </div>
                        </td>
                    </tr>
            `

    )
    document.getElementById("table_body").innerHTML = stringHTML
}
Table()


function toggleForm(id) {
    const data = JSON.parse(localStorage.getItem("order")) || []
    document.getElementById("form_scope").classList.toggle("hide")
    if (id != undefined) {
        const indexUpdate = data.findIndex(e => e.id == id)
        indexUpdateGlobal = indexUpdate
        inputName.value = data[indexUpdate].name
        inputtime1.value = data[indexUpdate].time1
        inputSum.value = data[indexUpdate].sum
        inputphanLoai.value = data[indexUpdate].phanloai
        inputtime.value = data[indexUpdate].time
        inputdatetime.value = data[indexUpdate].datetime
    } else {
        indexUpdateGlobal = null
        document.getElementById("form").reset()
    }
}

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault()
    const data = JSON.parse(localStorage.getItem("order")) || []
    if (indexUpdateGlobal != null) {
        data[indexUpdateGlobal].name = inputName.value
        data[indexUpdateGlobal].time1 = inputtime1.value
        data[indexUpdateGlobal].sum = inputSum.value
        data[indexUpdateGlobal].phanloai = inputphanLoai.value
        data[indexUpdateGlobal].time = inputtime.value
        data[indexUpdateGlobal].datetime = datetime.value
        indexUpdateGlobal = null
        this.reset()
        toggleForm()
        localStorage.setItem("order", JSON.stringify(data))
        Table()
        return
    }
    let imax = getNewId()
    const order1 = {
        id: imax,
        name: inputName.value,
        time1: inputtime1.value,
        sum: inputSum.value,
        phanloai: inputphanLoai.value,
        time: inputtime.value,
        datetime: inputdatetime.value
    }
    // idGlobal++
    data.push(order1)
    localStorage.setItem("order", JSON.stringify(data))
    this.reset()
    toggleForm()
    Table()
})

function deleteProduct(id) {
    const data = JSON.parse(localStorage.getItem("order")) || []
    const indexDelete = data.findIndex(e => e.id == id)
    const result = confirm(`Delete ${data[indexDelete].name}`)
    if (result) {
        data.splice(indexDelete, 1)
    }
    localStorage.setItem("order", JSON.stringify(data))
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
        if (idMax < element.id) {
            idMax = element.id
        }
    }
    return idMax + 1;
}




function confirmLogout() {
    let result = confirm("bạn có chắc chắn muốn đăng xuất không");
    if (result) {
        // Thực hiện thao tác đăng xuất tại đây
        alert("Đăng xuất thành công!");
        window.location.href = "../admin/adminlogin.html"
    }
    // window.location.href = "../admin/adminlogin.html"
}

function toggleLogoutMenu(avatar) {
    avatar.classList.toggle("active");
}
