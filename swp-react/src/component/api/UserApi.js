import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://localhost:7129',
});
async function getUsers() {
  try {
    // Fetch user data from the server. Replace with your actual API endpoint.
    const response = await axiosClient.get('/api/users');
    return response.data;
  } catch (error) {
    return [];
  }
}

async function saveUsers(users) {
  try {
    // Update user data on the server. Replace with your actual API endpoint.
    await axiosClient.post('/api/users', users);
  } catch (error) {
    console.error('Error saving users:', error);
  }
}

async function registerUser(username, email, password) {
  try {
    // Register a new user on the server. Replace with your actual API endpoint.
    const response = await axiosClient.post('/User/Register', { username, email, password });
    return response.data;
  } catch (error) {
    console.error('Error registering the user:', error);
    return { success: false, message: 'Registration failed' };
  }
}

async function loginUser(email, password) {
  try {
    // Gọi API sử dụng axiosClient với đường dẫn tương đối
    const response = await axiosClient.post('/User/Login', { email, password });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    return null; // Trả về null khi đăng nhập thất bại
  }
}

async function editProfile(userId, updatedData) {
  try {
    // Send a PUT request to update the user's profile.
    // Replace '/api/users/{userId}' with the actual API endpoint for updating user profiles.
    const response = await axiosClient.put(`/api/users/${userId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Error updating user profile:', error);
  }
}

loginUser('your_username', 'your_password')
  .then(responseData => {
    if (responseData) {
      console.log('Login successful:', responseData);
    } else {
      console.log('Login failed');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
export { getUsers, saveUsers, registerUser, loginUser, editProfile };