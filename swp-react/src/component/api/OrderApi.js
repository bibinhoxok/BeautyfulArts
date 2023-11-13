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

// Function to add a new order item to the cart
async function addToCart(courseId, userId) {
  const orderItemData = {
    courseId: courseId,
    userId: userId,
    // You might want to include additional details like quantity, etc.
  };

  const response = await axiosClient.post('/api/orders/cart', orderItemData);
  return response.data;
}

// Function to delete a cart item
async function deleteCartItem(cartItemId) {
  try {
    const response = await axiosClient.delete(`/api/orders/cart/item/${cartItemId}`);

    if (response.status !== 204) {
      throw new Error("Failed to delete cart item.");
    }
  } catch (error) {
    throw error;
  }
}

// Function to get cart items for a specific user
async function getCartItems(userId) {
  const response = await axiosClient.get(`/api/orders/cart/${userId}`);
  return response.data;
}

async function processPayment(orderId, paymentDetails) {
  try {
    const response = await axiosClient.post(`/api/orders/${orderId}/payment`, paymentDetails);

    if (response.status !== 200) {
      throw new Error("Payment processing failed.");
    }

    return response.data;
  } catch (error) {
    throw error;
  }
}

export { getAllOrders, getOrderDetail, deleteOrder, addToCart, deleteCartItem, getCartItems, processPayment };
