
// const data = JSON.parse(localStorage.getItem("orders_details")) || []
// // let idGlobal = 1
// let indexUpdateGlobal = null
// const inputproduct_code = document.getElementById("product_code")
// const inputtime = document.getElementById("time")
// const inputstatus = document.getElementById("status")
// const inputproduct_name = document.getElementById("product_name")
// const inputquantity = document.getElementById("quantity")
// const inputtotal_sum = document.getElementById("total_sum")

// function Table() {
//     const data = JSON.parse(localStorage.getItem("orders_details")) || []
//     let stringHTML = "";
//     data.forEach(e =>
//         stringHTML +=
//         `
//                     <tr>
//                         <td>${e.order_id}</td>
//                         <td>${e.product_name}</td>
//                         <td>${e.quantity}</td>
//                         <td>${e.unit_sum}$</td>
//                         <td>${e.status}</td>
//                         <td>${e.orders_details}</td>
//                         <td>${e.quantity}</td>
//                         <td>
//                             <div class="action_col">
//                                 <button class="btn btn_sua" onclick="toggleForm(${e.order_id})">See</button>
//                                 <button class="btn btn_xoa" onclick="deleteProduct(${e.order_id})">Delete</button>
//                             </div>
//                         </td>
//                     </tr>
//             `

//     )
//     document.getElementById("table_body").innerHTML = stringHTML
// }
// Table()


// function toggleForm(id) {
//     const data = JSON.parse(localStorage.getItem("orders")) || []
//     document.getElementById("form_scope").classList.toggle("hide")
//     if (id != undefined) {
//         const indexUpdate = data.findIndex(e => e.order_id == id)
//         indexUpdateGlobal = indexUpdate
//         inputproduct_code.value = data[indexUpdate].product_code
//         inputtime.value = data[indexUpdate].time
//         inputstatus.value = data[indexUpdate].status
//         inputproduct_name.value = data[indexUpdate].product_name
//         inputquantity.value = data[indexUpdate].quantity
//         inputtotal_sum.value = data[indexUpdate].total_sum
//     } else {
//         indexUpdateGlobal = null
//         document.getElementById("form").reset()
//     }
// }

// document.getElementById("form").addEventListener("submit", function (e) {
//     e.preventDefault()
//     const data = JSON.parse(localStorage.getItem("orders")) || []
//     if (indexUpdateGlobal != null) {
//         data[indexUpdateGlobal].product_code = inputproduct_code.value
//         data[indexUpdateGlobal].time = inputtime.value
//         data[indexUpdateGlobal].status = inputstatus.status
//         data[indexUpdateGlobal].product_name = inputproduct_name.value
//         data[indexUpdateGlobal].quantity = inputquantity.value
//         data[indexUpdateGlobal].total_sum = inputtotal_sum.value
//         indexUpdateGlobal = null
//         this.reset()
//         toggleForm()
//         localStorage.setItem("orders", JSON.stringify(data))
//         Table()
//         return
//     }
//     let imax = getNewId()
//     const order = {
//         order_id: imax,
//         user_id: imax,
//         order_at: inputtime.value,
//         total_sum: inputtotal_sum.value,
//         status: inputstatus.value,
//         orders_details: inputproduct_name.value,
//         quantity: inputquantity.value
//     }
//     // idGlobal++
//     data.push(order)
//     localStorage.setItem("orders", JSON.stringify(data))
//     this.reset()
//     toggleForm()
//     Table()
// })

// function deleteProduct(id) {
//     const data = JSON.parse(localStorage.getItem("orders")) || []
//     const indexDelete = data.findIndex(e => e.order_id == id)
//     const result = confirm(`Delete ${data[indexDelete].name}`)
//     if (result) {
//         data.splice(indexDelete, 1)
//     }
//     localStorage.setItem("orders", JSON.stringify(data))
//     Table()
// }

// function checkSearch() {
//     let text = document.getElementById("search").value;
//     let foundStudent = data.filter(stu => stu.name.toLowerCase().includes(text.trim().toLowerCase()));
//     Table(foundStudent);
// }
// // logic id tự tăng
// function getNewId() {
//     let idMax = 0;
//     for (let i = 0; i < data.length; i++) {
//         const element = data[i];
//         if (idMax < element.order_id) {
//             idMax = element.order_id
//         }
//     }
//     return idMax + 1;
// }




// hiển thị trạng thái theo mã trậng thái
// const handleStatusCodeOrder = (statusCode) => {
//   switch (statusCode) {
//     case 1:
//       return `<button type="button" class="btn btn-secondary">Chờ xác nhận ...</button>`;
//     case 2:
//       return `<button type="button" class="btn btn-success">Đã xác nhận</button>`;
//     case 3:
//       return `<button type="button" class="btn btn-danger">Đã hủy</button>`;
//   }
// };
// console.log(handleStatusCodeOrder());
// hiển thị toán bộ đơn hàng  theo thứ tự ngày gần nhất

// lấy   danh sách đơn hàng
let orders = JSON.parse(localStorage.getItem("orders")) || [];
const showOrders = (list = orders) => {
  list.sort((a, b) => b.order_at.localeCompare(a.order_at));
  let string = list.reduce(
    (str, value) =>
      str +
      `<tr>
    <td>${value.order_id}</td>
    <td>${value.order_at}</td>
    <td>${value.total_sum} $</td>
    <td>${handleStatusCodeOrder(value.status)}</td>
    <td>
        <button type="button" onclick="showOrderDetail(${value.order_id
      })" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalDetail">Detail</button>
    </td>  
</tr>`,
    ""
  );

  document.getElementById("orders").innerHTML = string;
};
showOrders();
// console.log(showOrders());

// lấy danh sách người dùng
// let users = JSON.parse(localStorage.getItem("users")) || [];
// console.log(users);

// // hiển thị chi tiết đơn hàng
// const showOrderDetail = (idOrder) => {
//   let orders = JSON.parse(localStorage.getItem("orders")) || [];
//   let orderDetail = orders.find((order) => order.order_id == idOrder);
//   //  lấy người dùng theo user_id
//   let a = JSON.parse(localStorage.getItem("users")) || [];
//   let user = a.find((u) => u.user_id == orderDetail.user_id);
//   // đổ ra danh sách đơn hàng chi tiết
//   let str = orderDetail.orders_details.reduce(
//     (prevStr, value) =>
//       prevStr +
//       `<tr>
//     <td>${value.user_id}</td>
//     <td>${value.product_name}</td>
//     <td>${value.unit_sum}</td>
//     <td>${value.quantity}</td>
//     <td>${value.unit_sum * value.quantity}</td>
//   </tr>`,
//     ""
//   );

//   // hiển thị buton theo mã trạng thái
//   let button =
//     orderDetail.status == 1
//       ? `<button
// type="button"
// class="btn btn-danger"
// data-bs-dismiss="modal"
// onclick="handleDenieOrder(${orderDetail.order_id})"
// >
// Denie
// </button>
// <button type="button" class="btn btn-success" onclick="handleAcceptOrder(${orderDetail.order_id})">Accept</button>`
//       : `<button type="button" class="btn btn-info" data-bs-dismiss="modal">Close</button>`;

//   let string = `
//     <div class="modal-header">
//             <h5 class="modal-title" id="modalDetailLabel">Order</h5>
//             <button
//               type="button"
//               class="btn-close"
//               data-bs-dismiss="modal"
//               aria-label="Close"
//             ></button>
//           </div>
//           <div class="modal-body">
//     <div>
//     <span>Số hóa đơn : ${orderDetail.order_id}</span>
//     <p>Người đặt hàng : ${user.full_name}</p>
//     <p>Thời gian đặt hàng : ${orderDetail.order_at}</p>
//   </div>
//   <h4>Chi tiết hóa đơn</h4>
//   <table class="table" id="order-details">
//     <thead>
//       <tr>
//         <th scope="col">ID</th>
//         <th scope="col">tên</th>
//         <th scope="col">Giá</th>
//         <th scope="col">Số lượng</th>
//         <th scope="col">Tổng cộng</th>
//       </tr>
//     </thead>
//     <tbody>
//      ${str}
//     </tbody>
//     <tfoot>
//       <td colspan="5">Tổng tiền : ${orderDetail.total_sum} $</td>
//     </tfoot>
//   </table>
//   </div>
//           <div class="modal-footer">
//             ${button}
//           </div>`;

//   document.getElementById("modendeltail").innerHTML = string
// };
// console.log(`${orderDetail.order_at}`);


// xác nhận đơn hàng
// function handleAcceptOrder(idOrder) {
//   // lấy ra vị trí cần xác nhận
//   let orderIndex = orders.findIndex((order) => order.order_id == idOrder);
//   // tiến hành cập nhật trậng thâis
//   orders[orderIndex].status = 2;
//   localStorage.setItem("orders", JSON.stringify(orders));
//   location.reload();
// }
// // từ chối đơn hàng
// function handleDenieOrder(idOrder) {
//   // lấy ra vị trí cần xác nhận
//   let orderIndex = orders.findIndex((order) => order.order_id == idOrder);
//   // tiến hành cập nhật trậng thâis
//   orders[orderIndex].status = 3;
//   localStorage.setItem("orders", JSON.stringify(orders));
//   location.reload();
// }
