import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://localhost:7129',
});

async function getUsers() {
  try {
    const response = await axiosClient.get('/api/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}

async function saveUsers(users) {
  try {
    await axiosClient.post('/api/users', users);
  } catch (error) {
    console.error('Error saving users:', error);
  }
}

async function registerUser(username, email, password) {
  try {
    const response = await axiosClient.post('/User/Register', { username, email, password });
    return response.data;
  } catch (error) {
    console.error('Error registering the user:', error);
    return { success: false, message: 'Registration failed' };
  }
}

async function loginUser(email, password) {
  try {
    const response = await axiosClient.post('/User/Login', { email, password });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    return null;
  }
}

async function editProfile(userId, updatedData) {
  try {
    const response = await axiosClient.put(`/api/users/${userId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Error updating user profile:', error);
  }
}

async function updateUser(userId, updatedData) {
  try {
    const response = await axiosClient.put(`/api/users/${userId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
  }
}

async function deleteUser(userId) {
  try {
    const response = await axiosClient.delete(`/api/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting user:', error);
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

export { getUsers, saveUsers, registerUser, loginUser, editProfile, updateUser, deleteUser };
