// import React, { useState, useEffect } from "react";
// import Button from "react-bootstrap/Button";
// import Sidebar from "../Sidebar/customer";
// import { useCourse } from '../Customer/CourseContext';


// function Cart() {
//   const {cartItems} = useCourse();

//   useEffect(() => {
//     // Gọi API hoặc truy vấn cơ sở dữ liệu để lấy thông tin sản phẩm trong giỏ hàng.
//     // Sau đó cập nhật giỏ hàng bằng setCartItems.
//   }, []);

// //   return (
// //     <div>
// //     {/* <Sidebar/>
// //       <h1>Giỏ hàng của bạn</h1>
// //       <ul>
// //         {cartItems.map((item) => (
// //           <li key={item.id}>
// //             {item.name} - {item.price}
// //           </li>
// //         ))}
// //       </ul> */}
// //       <div className="app-container">
// //   <Sidebar/>
// //   <h1>Giỏ hàng của bạn</h1>
// //   <div className="col-md-9 col-12">
// //     <div id="wrap">
// //       <div id="grid">
// //         <div className="column column2">
// //         <div className="step" id="step5">
// //             <div className="number">
// //               <span>1</span>
// //             </div>
// //             <div className="title">
// //               <h1>Thông tin đơn hàng</h1>
// //             </div>
// //             <div className="modify">
// //               <i className="fa fa-plus-circle" />
// //             </div>
// //           </div>
// //           <div className="content" id="final_products">
// //             <div className="left" id="ordered">
// //               <div className="products">
// //                 <div className="product_image">
// //                   <img src="" alt=""/>
// //                 </div>
// //                 <div className="product_details">
// //                   <span className="product_name">
// //                     SKETCHNOTE CÙNG HỌA SỸ XUÂN LAN 2023
// //                   </span>
// //                   <span className="quantity">1</span>
// //                   <span className="price">199.000 VNĐ</span>
// //                 </div>
// //               </div>
// //               {/* <div className="final">
// //                 <span className="title">
// //                   Tổng cộng <span id="calculated_total">199.000 VNĐ</span>
// //                 </span>
// //               </div> */}
// //             </div>
// //             {/* <div className="right" id="reviewed">
// //               <div className="billing">
// //                 <span className="title">thông tin thanh toán:</span>
// //                 <div className="address_reviewed">
// //                   <span className="name">Username</span>
// //                   <span className="address">123 Main Street</span>
// //                   <span className="location">Everytown, USA, 12345</span>
// //                   <span className="phone">(123)867-5309</span>
// //                 </div>
// //               </div>
// //               <div className="payment">
// //                 <span className="title">phương thức thanh toán:</span>
// //                 <div className="payment_reviewed">
// //                   <span className="method">Visa</span>
// //                   <span className="number_hidden">xxxx-xxxx-xxxx-1111</span>
// //                 </div>
// //               </div>
// //               <div id="complete">
// //                 <a className="big_button" id="complete" href="#">
// //                   Thanh toán
// //                 </a>
// //                 <span className="sub">
// //                   By selecting this button you agree to the purchase and
// //                   subsequent payment for this order.
// //                 </span>
// //               </div>
// //             </div> */}
// //           </div>
// //         </div>
// //         <div className="column column3">
          
// //         </div>
// //       </div>
// //     </div>
// //   </div>
// // </div>

// //     </div>
// //   );

// return <div className="cart">
//     <div>
//         <h1>Giỏ hàng của bạn</h1>
//         <div className="cartItems">
//         </div>
//     </div>
// </div>
// }

// export default Cart;
