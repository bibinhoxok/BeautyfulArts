import axios from './axios';

const axiosClient = axios.create({
    baseURL: 'https://localhost:7129',
  });

// Function to fetch all orders by userId
async function getAllOrders(userId) {
  const response = await axiosClient.get(`/api/orders/user/${userId}`);
  return response.data;
}

// Function to get order details by orderId
async function getOrderDetail(orderId) {
  const response = await axiosClient.get(`/api/orders/${orderId}`);
  return response.data;
}

// Function to delete an order by orderId
async function deleteOrder(orderId) {
  try {
    const response = await axiosClient.delete(`/api/orders/${orderId}`);

    if (response.status !== 204) {
      throw new Error("Failed to delete order.");
    }
  } catch (error) {
    throw error;
  }
}

// Function to add a new order
async function addOrder(newOrderData) {
  const response = await axiosClient.post('/api/orders', newOrderData);
  return response.data;
}

export { getAllOrders, getOrderDetail, deleteOrder, addOrder };
