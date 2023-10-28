import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebarCustomer';

function Cart () {
    return<>
    {/* table element */}
    <div style={{ display: "block", height: "200%" }}>
      <div className="app-container">
        <Sidebar/>
        <div className="col-md-9 col-12">
          <div id="wrap">
            <div id="grid">
              <div className="column column2">
                <div className="step" id="step4">
                  <div className="number">
                    <span>1</span>
                  </div>
                  <div className="title">
                    <h1>Thông tin thanh toán:</h1>
                  </div>
                  <div className="modify">
                    <i className="fa fa-plus-circle" />
                  </div>
                </div>
                <div className="content" id="payment">
                  <div className="left">
                    <form className="go-right">
                      <div>
                        <input
                          type="text"
                          name="card_number"
                          defaultValue=""
                          id="card_number"
                          placeholder="xxxx-xxxx-xxxx-xxxx"
                          data-trigger="change"
                          data-validation-minlength={1}
                          data-type="name"
                          data-required="true"
                          data-error-message="Enter Your Credit Card Number"
                        />
                        <label htmlFor="card_number">Card Number</label>
                      </div>
                      <div>
                        <div className="expiry">
                          <div className="month_select">
                            <select
                              name="exp_month"
                              value=""
                              id="exp_month"
                              placeholder=""
                              data-trigger="change"
                              data-type="name"
                              data-required="true"
                              data-error-message="Enter Your Credit Card Expiration Date"
                            >
                              <option value={1}>01 (Jan)</option>
                              <option value={2}>02 (Feb)</option>
                              <option value={3}>03 (Mar)</option>
                              <option value={4}>04 (Apr)</option>
                              <option value={5}>05 (May)</option>
                              <option value={6}>06 (Jun)</option>
                              <option value={7}>07 (Jul)</option>
                              <option value={8}>08 (Aug)</option>
                              <option value={9}>09 (Sep)</option>
                              <option value={10}>10 (Oct)</option>
                              <option value={11}>11 (Nov)</option>
                              <option value={12}>12 (Dec)</option>
                            </select>
                          </div>
                          <div className="year_select">
                            <select
                              name="exp_year"
                              value=""
                              id="exp_year"
                              placeholder=""
                              data-trigger="change"
                              data-type="name"
                              data-required="true"
                              data-error-message="Enter Your Credit Card Expiration Date"
                            >
                              <option value={1}>14 </option>
                              <option value={2}>15 (Feb)</option>
                              <option value={3}>16 (Mar)</option>
                              <option value={4}>17 (Apr)</option>
                              <option value={5}>18 (May)</option>
                              <option value={6}>19 (Jun)</option>
                              <option value={7}>20 (Jul)</option>
                              <option value={8}>22 (Aug)</option>
                              <option value={9}>23 (Sep)</option>
                              <option value={10}>24 (Oct)</option>
                              <option value={11}>25 (Nov)</option>
                              <option value={12}>26 (Dec)</option>
                            </select>
                          </div>
                          <label className="exp_date" htmlFor="Exp_Date">
                            Exp Date
                          </label>
                        </div>
                      </div>
                      <div className="sec_num">
                        <div>
                          <input
                            type="text"
                            name="ccv"
                            defaultValue=""
                            id="ccv"
                            placeholder={123}
                            data-trigger="change"
                            data-validation-minlength={3}
                            data-type="name"
                            data-required="true"
                            data-error-message="Enter Your Card Security Code"
                          />
                          <label htmlFor="ccv">Security Code</label>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="right">
                    <div className="accepted">
                      <span>
                        <img src="https://i.imgur.com/Z5HVIOt.png" />
                      </span>
                      <span>
                        <img src="https://i.imgur.com/Le0Vvgx.png" />
                      </span>
                      <span>
                        <img src="https://i.imgur.com/D2eQTim.png" />
                      </span>
                      <span>
                        <img src="https://i.imgur.com/Pu4e7AT.png" />
                      </span>
                      <span>
                        <img src="https://i.imgur.com/ewMjaHv.png" />
                      </span>
                      <span>
                        <img src="https://i.imgur.com/3LmmFFV.png" />
                      </span>
                    </div>
                  </div>
                  <Link className="continue" to="#">
                    Tiếp tục
                  </Link>
                </div>
              </div>
              <div className="column column3">
                <div className="step" id="step5">
                  <div className="number">
                    <span>2</span>
                  </div>
                  <div className="title">
                    <h1>Xác nhận đơn hàng:</h1>
                  </div>
                  <div className="modify">
                    <i className="fa fa-plus-circle" />
                  </div>
                </div>
                <div className="content" id="final_products">
                  <div className="left" id="ordered">
                    <div className="products">
                      <div className="product_image">
                        <img src="../img/detail_xuanlan.jpg" />
                      </div>
                      <div className="product_details">
                        <span className="product_name">
                          SKETCHNOTE CÙNG HỌA SỸ XUÂN LAN 2023
                        </span>
                        <span className="quantity">1</span>
                        <span className="price">199.000 VNĐ</span>
                      </div>
                    </div>
                    <div className="final">
                      <span className="title">
                        Tổng cộng <span id="calculated_total">199.000 VNĐ</span>
                      </span>
                    </div>
                  </div>
                  <div className="right" id="reviewed">
                    <div className="billing">
                      <span className="title">thông tin thanh toán:</span>
                      <div className="address_reviewed">
                        <span className="name">Username</span>
                        <span className="address">123 Main Street</span>
                        <span className="location">Everytown, USA, 12345</span>
                        <span className="phone">(123)867-5309</span>
                      </div>
                    </div>
                    <div className="payment">
                      <span className="title">phương thức thanh toán:</span>
                      <div className="payment_reviewed">
                        <span className="method">Visa</span>
                        <span className="number_hidden">xxxx-xxxx-xxxx-1111</span>
                      </div>
                    </div>
                    <div id="complete">
                      <Link className="big_button" id="complete" to="#">
                        Thanh toán
                      </Link>
                      <span className="sub">
                        By selecting this button you agree to the purchase and
                        subsequent payment for this order.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  
    ;
}

export default Cart;