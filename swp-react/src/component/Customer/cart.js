import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap'; // Thêm Form từ react-bootstrap
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import { deleteCartItem, getCartItems, processPayment } from '../api/OrderApi';
import { useUser } from '../User/Context';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const { user } = useUser();
  const navigate = useNavigate();
  const [paymentDetails, setPaymentDetails] = useState({
    name: user?.name || '', // Lấy từ thông tin người dùng
    address: user?.address || '',
    phone: user?.phone || '',
    paymentMethod: '', // Làm cho người dùng nhập vào
    cardNumber: '', // Làm cho người dùng nhập vào
  });

  useEffect(() => {
    // Fetch cart items when the component mounts
    const userId = user?.id; // Replace with the actual user ID
    getCartItems(userId)
      .then((items) => setCartItems(items))
      .catch((error) => console.error('Error fetching cart items:', error));
  }, [user]);

  const handleDeleteCartItem = (cartItemId) => {
    // Call the deleteCartItem API function
    deleteCartItem(cartItemId)
      .then(() => {
        // If successful, update the local state to remove the deleted item
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== cartItemId));
      })
      .catch((error) => console.error('Error deleting cart item:', error));
  };

  const handlePayment = async (orderId) => {
    try {
      // Call the processPayment API
      const paymentResult = await processPayment(orderId, paymentDetails);

      // Display success message or handle payment result as needed
      console.log('Payment successful:', paymentResult);

      // You can navigate to a success page or show a success message
      navigate('/payment-success');
    } catch (error) {
      console.error('Payment failed:', error);
      // Handle payment failure, show an error message, etc.
    }
  };

  const calculatedTotal = cartItems.reduce((total, item) => total + item.totalPrice, 0);

  return (
    <div className="app-container">
      <Sidebar />
      <div className="col-md-9 col-12">
        <div id="wrap">
          <div id="grid">
            <div className="column column2">
              <div className="step" id="step5">
                <div className="number">
                  <span>1</span>
                </div>
                <div className="title">
                  <h1>Thông tin đơn hàng</h1>
                </div>
                <div className="modify">
                  <i className="fa fa-plus-circle" />
                </div>
              </div>
              <div className="content" id="final_products">
                <div className="left" id="itemed">
                  {cartItems.map((item) => (
                    <div key={item.id} className="products">
                      <div className="product_image">
                        <img src={item.courseImg} alt="" />
                      </div>
                      <div className="product_details">
                        <span className="product_name">{item.courseName}</span>
                        <span className="price">{item.coursePice}</span>
                        <Button
                          variant="danger"
                          onClick={() => handleDeleteCartItem(item.courseId)}
                        >
                          Xóa
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="column column3">
              <div className="final">
                <span className="title">
                  Tổng cộng <span id="calculated_total">{calculatedTotal} VNĐ</span>
                </span>
              </div>
              <div className="right" id="reviewed">
                {/* Thêm thông tin thanh toán và phương thức thanh toán ở đây */}
                <div className="billing">
                  <span className="title">thông tin thanh toán:</span>
                  <div className="address_reviewed">
                    <span className="name">{paymentDetails.name}</span>
                    <span className="address">{paymentDetails.address}</span>
                    <span className="phone">{paymentDetails.phone}</span>
                  </div>
                </div>
                <div className="payment">
                  <span className="title">phương thức thanh toán:</span>
                  <div className="payment_reviewed">
                    <span className="method">{paymentDetails.paymentMethod}</span>
                    <span className="number_hidden">{paymentDetails.cardNumber}</span>
                  </div>
                </div>
                <div id="complete">
                  <Form.Group controlId="paymentMethod">
                    <Form.Label>Phương thức thanh toán</Form.Label>
                    <Form.Control
                      type="text"
                      value={paymentDetails.paymentMethod}
                      onChange={(e) =>
                        setPaymentDetails({ ...paymentDetails, paymentMethod: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group controlId="cardNumber">
                    <Form.Label>Số thẻ</Form.Label>
                    <Form.Control
                      type="text"
                      value={paymentDetails.cardNumber}
                      onChange={(e) =>
                        setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Button
                    className="big_button"
                    id="complete"
                    onClick={() => handlePayment(cartItems[0].id)} // Chọn một order để lấy orderId
                  >
                    Thanh toán
                  </Button>

                  <span className="sub">
                    By selecting this button you agree to the purchase and subsequent payment for this item.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
