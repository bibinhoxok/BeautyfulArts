import React, { useState, useEffect } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';
import { getAllOrders, getOrderDetail } from '../api/OrderApi'; 
import { useUser } from '../User/Context';

function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [orderData, setOrderData] = useState(null); // Add state for order details
  const { user } = useUser();

  useEffect(() => {
    // Fetch orders for the current user
    getAllOrders(user.id)
      .then((orderData) => setOrders(orderData))
      .catch((error) => console.error("Error fetching orders:", error));
  }, [user.id]);

  const openOrderDetail = async (orderId) => {
    try {
      const orderDetails = await getOrderDetail(orderId);
      setOrderData(orderDetails); // Set order details when fetching them
      setSelectedOrder(orderId);
      setShowDetail(true);
    } catch (error) {
      console.error("Error fetching order details:", error);
    }
  };

  const closeOrderDetail = () => {
    setSelectedOrder(null);
    setShowDetail(false);
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Total Price</th>
            <th>Order Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.total}</td>
              <td>{order.creationDate}</td>
              <td>
                <Button variant="primary" onClick={() => openOrderDetail(order.id)}>
                  Xem chi tiết
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showDetail} onHide={closeOrderDetail}>
        <Modal.Header closeButton>
          <Modal.Title>Chi tiết đơn hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h4>ID: {orderData.id}</h4>
            <p>Course Name: {orderData.courseName}</p>
            <p>Course Price: {orderData.coursePrice}</p>
            <p>Course ID: {orderData.courseId}</p>
            <p>Total Price: {orderData.total}</p>
            <p>Order Date: {orderData.creationDate}</p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default OrderHistory;
